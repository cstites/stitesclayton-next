import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

interface ProjectCarouselProps {
  projectData: any[];
}

export function ProjectCarousel(props: ProjectCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {props.projectData.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex-col items-center justify-center p-6 aspect-square">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={120}
                    height={120}
                    className="rounded-3xl"
                  />
                  <div className="text-md font-semibold mt-4">{project.title}</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
