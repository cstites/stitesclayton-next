"use client";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import { ProjectCarousel } from "./project-carousel";

export default function ProjectInfo() {
  const projects = useQuery(api.projects.getProjects);

  return (
    <div className="flex-col max-w-5xl mt-8 items-start">
      <p className="text-2xl font-bold">Software & Data Projects:</p>
      <div className="mt-8 ml-8 mr-8">
        <ProjectCarousel projectData={projects || []}/>
      </div>

      {projects?.map((project) => {
        return (
          <div key={project._id} className="mt-4">
            <p className="text-xl font-bold">{project.title}</p>
            <p>{project.description}</p>
            <p>
              <a href={project.url} className="underline">
                {project.url}
              </a>
            </p>
            <div className="flex">
              {project.tags.map((tag: string) => {
                return (
                  <p
                    key={tag}
                    className="rounded-md border-solid border-2 p-1 mr-2"
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
