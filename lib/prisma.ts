import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "development") {
  globalThis.prisma = db;
}

// This code snippet ensures that a single instance of the Prisma client is used throughout the application, which helps in optimizing performance and avoiding unnecessary database connections.
