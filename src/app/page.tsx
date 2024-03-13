"use client";

import ProjectInfo from "@/components/project-info";
import WelcomeBlock from "@/components/welcome-block";
import React from "react";

export default function Home() {

  return (
    <main className="container min-h-screen flex-col items-start p-12 pt-28 font-light">
      
      <WelcomeBlock />

      <ProjectInfo />
      
    </main>
  );
}
