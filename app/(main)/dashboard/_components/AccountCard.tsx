import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface IAccount {
  id: string;
  name: string;
  type: string;
  balance: number;
  isDefault: boolean;
}

const AccountCard = (account: IAccount) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{account.name}</CardTitle>
          <Switch />
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AccountCard;
