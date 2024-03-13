import { useState } from "react";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import TagBox from "./tag-box";

interface ProjectCarouselProps {
  projectData: any[];
  descriptionClickHander: (index: number) => void;
    selectedIndex: number;
}

export function ProjectCarousel(props: ProjectCarouselProps) {

  function onProjectClick(index: number) {
    console.log("clicked on project", index);
    props.descriptionClickHander(index);
  }

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {props.projectData.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card onClick={() => onProjectClick(index)} className={index === props.selectedIndex ? "border-[#46BDB4] border-2" : ""}>
                <CardContent className="flex-col p-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="rounded-3xl"
                  />
                  <div className="text-md font-semibold mt-4">
                    {project.title}
                  </div>
                  <div className="mt-4">
                    <TagBox tags={project.tags} />
                  </div>
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
