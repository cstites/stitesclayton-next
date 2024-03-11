"use client";

import { useQuery } from "convex/react";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const projects = useQuery(api.projects.getProjects);

  return (
    <main className="flex min-h-screen flex-col items-start font-mono p-12 lg:pl-24 lg:pr-24">
      <div className=" w-full items-start justify-between  text-sm lg:flex">
        <div className="mb-4">
          <p className="text-3xl font-bold">{"Hi, I'm Cole Stites-Clayton"}</p>
          <p>
            This website is still being built, check back soon for more updates!
          </p>
          <div className="flex text-2xl pt-4 items-start">
            <a
              href="https://www.linkedin.com/in/cole-stites-clayton/"
              className="pr-4"
            >
              <FiLinkedin />
            </a>
            <a href="https://github.com/cstites" className="pr-4">
              <FiGithub />
            </a>
            <a href="mailto:hello@stitesclayton.co" className="pr-4">
              <FiMail />
            </a>
          </div>
        </div>
        <div className="text-xl border-solid border-2 rounded-md max-w-48 p-2">
          <a className="p-4" href="/cole_stites-clayton_resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>

      <div className="max-w-5xl mt-8 items-start">
        <p>
          I'm an entrepreneur and engineer passionate about sustainability and
          the natural world. I started{" "}
          <a
            href="https://www.shyftpower.com"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            SHYFT Power Solutions
          </a>{" "}
          to help advance the transition to renewable energy in Africa. I am now
          taking a career break to work on personal projects, build my
          engineering skills and find my next challenge.
        </p>
      </div>

      <div className="max-w-5xl mt-8 items-start">
        <p className="text-2xl font-bold">Software & Data Projects:</p>
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
    </main>
  );
}
