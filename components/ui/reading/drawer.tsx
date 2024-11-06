"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CarouselDemo } from "./caroussel";

export function CardsMeaning() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-[13px] font-extralight">
          SEE CARDS MEANING
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-24 w-full">
          <div className="p-4 pb-0 w-[90vw] flex flex-col items-start justify-center">
            <DrawerHeader>
              <DrawerTitle>Big Arcana</DrawerTitle>
              <DrawerDescription>Thoth Tarot Deck</DrawerDescription>
            </DrawerHeader>
            <div className="flex items-start space-x-2 w-full gap-24 pb-12">
              <CarouselDemo />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
