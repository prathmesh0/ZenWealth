"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface ICreateAccount {
  name: string;
  type: AccountType;
  balance: number;
  isDefault: boolean;
  userId: string;
}

type AccountType = "CURRENT" | "SAVINGS";

const serializeTransactions = (obj: any) => {
  const serializes = { ...obj };

  if (obj.balance) {
    serializes.balance = obj.balance.toNumber();
  }
  if (obj.amount) {
    serializes.amount = obj.amount.toNumber();
  }
  return serializes;
};

export async function createAccount(data: ICreateAccount) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // convert balance into float
    const balanceFloat = data.balance;
    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance Amount");
    }

    // Check if this account is the users first account
    const existingAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    const shouldBeDefault =
      existingAccounts.length === 0 ? true : data.isDefault;

    // If this account should be default. unset other default accounts
    if (shouldBeDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    // Create Account
    const account = await db.account.create({
      data: {
        name: data.name,
        type: data.type,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldBeDefault,
      },
    });
    const serializedAccount = serializeTransactions(account);
    revalidatePath("/dashboard");
    return { success: true, data: serializedAccount };
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}

// getAllUsers Account

export async function getUsersAccount() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const accounts = await db.account.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: {
          transactions: true,
        },
      },
    },
  });

  const serializedAccount = accounts.map(serializeTransactions);
  return serializedAccount;
}
