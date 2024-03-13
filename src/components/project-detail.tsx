"use client";

import Image from "next/image";

interface ProjectDetailProps {
  project: any;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  console.log(project);
  return (
    <div className="lg:flex md:flex">
      <div className="flex-2 mr-8">
        <Image
          src={project.image}
          alt={project.title}
          width={240}
          height={240}
          className="rounded-3xl"
        />
      </div>
      <div className="flex-col flex-1">
        <p className="text-xl font-bold">{project.title}</p>
        <p className="mt-4">{project.description}</p>
        <p className="mt-4">
          <a href={project.url} className="underline">
            {project.url}
          </a>
        </p>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 mt-4 gap-y-1">
          {project.tags?.map((tag: string) => {
            return (
              <p
                key={tag}
                className="rounded-md border-solid border-2 p-1 mr-2 text-sm"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
