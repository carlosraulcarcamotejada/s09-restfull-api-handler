"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { setCookie } from "cookies-next";

interface TabsBarProps {
  tabOptions?: number[];
  selectedTab?: number;
}

const TabsBar = ({
  selectedTab = 1,
  tabOptions = [1, 2, 3, 4],
}: TabsBarProps) => {
  const [selected, setSelected] = useState<number>(selectedTab);

  const onTabSelect = (tab: number) => {
    setSelected(tab);
    console.log("hello")
    setCookie("selectedTab", `${tab}`);
  };

  return (
    <Tabs
      defaultValue="account"
      value={`${selected}`}
      onValueChange={(item) => {
        onTabSelect(Number(item));
      }}
    >
      <TabsList className="">
        {tabOptions.map((item) => (
          <TabsTrigger
            key={item}
            value={`${item}`}
            className="w-28"
          >{`Tab ${item}`}</TabsTrigger>
        ))}
      </TabsList>

      {tabOptions.map((item) => (
        <TabsContent key={item} value={`${item}`}>
          <Card>
            <CardHeader>
              <CardTitle>{`Tab ${item}`}</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export type { TabsBarProps };
export { TabsBar };
