"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import useFetch from "@/app/hooks/useFetch";
import { upadateDefaultAccount } from "@/actions/accounts";
import { toast } from "sonner";
// Import the Spinner component

interface IAccount {
  id: string;
  name: string;
  type: string;
  balance: number;
  isDefault: boolean;
}

const AccountCard = (account: IAccount) => {
  const {
    data: updatedAccount,
    error,
    fn: updateDefaultFn,
    loading: updateDefaultLoading,
  } = useFetch(upadateDefaultAccount);

  const handleDefaultChange = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (account.isDefault) {
      toast.warning("You need atleast 1 default account");
      return;
    }
    await updateDefaultFn(account.id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount, updateDefaultLoading]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to update default acccount");
    }
  }, [error]);

  return (
    <Card className="hover:shadow-md transition-shadow group relative">
      <Link href={`/account/${account.id}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium capitalize">
            {account.name}
          </CardTitle>
          <div className="flex items-center">
            {updateDefaultLoading ? (
              <p>Updating..</p> // Render the spinner when loading
            ) : (
              <Switch
                checked={account.isDefault}
                onClick={handleDefaultChange}
                disabled={updateDefaultLoading}
              />
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{account.balance.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center">
            <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default AccountCard;
