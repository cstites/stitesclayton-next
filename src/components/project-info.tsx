"use client";

import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import { ProjectCarousel } from "./project-carousel";
import { useState, useEffect } from "react";
import ProjectDetail from "./project-detail";
import { Oval } from "react-loader-spinner";

export default function ProjectInfo() {
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = useQuery(api.projects.getProjects);

  useEffect(() => {
    if (projects) {
      setLoading(false);
    }
  }, [projects]);

  return (
    <div className="flex-col max-w-5xl mt-8 items-start">
      <p className="text-2xl font-bold">Software & Data Projects:</p>

      {loading ? (
        <div className="flex justify-center items-center mt-8">
          <Oval color="#46BDB4" height={100} width={100} />
        </div>
      ) : (
        <>
          <div className="mt-8 ml-8 mr-8">
            <ProjectCarousel
              projectData={projects || []}
              descriptionClickHander={setSelectedIndex}
              selectedIndex={selectedIndex}
            />
          </div>
          <div className="mt-8">
            <ProjectDetail project={projects?.at(selectedIndex) || {}} />
          </div>
        </>
      )}
    </div>
  );
}
