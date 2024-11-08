"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ThotDeck } from "@/utils/cards";
import { type CarouselApi } from "@/components/ui/carousel";

export function CarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full flex flex-row gap-12">
      <Carousel className="w-full max-w-xs" setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: ThotDeck.length }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2 w-[300px] mx-auto">
                    <Image
                      width={300}
                      height={100}
                      alt="/cards/The Fool.jpg"
                      src={`/cards/${ThotDeck[index].filename}`}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div>
        <h1 className="font-bold text-[20px]">{ThotDeck[currentIndex].name}</h1>
        <p className="text-[16px] font-thin">
          {ThotDeck[currentIndex].description ||
            "Here goes Tarot card description"}
        </p>
      </div>
    </section>
  );
}
