import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TriangleUpIcon } from "@radix-ui/react-icons";

const WidgetItem = () => {
  return (
    <Card className="w-52 ">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">
          Global Activities
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="flex">
          <div className="text-3xl font-bold text-foreground">$23,988</div>
          <div className="flex items-center gap-1 text-green-500">
            <TriangleUpIcon className="text-green-500 size-8" />
            <span>2%</span>
          </div>
        </div>
        <div className="block text-center text-foreground">
          Compared to last week $13,988
        </div>
      </CardContent>
    </Card>
  );
};

export { WidgetItem };
