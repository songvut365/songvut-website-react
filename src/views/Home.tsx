import React from "react";
import InfoCard from "../components/InfoCard";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Project from "../components/Project";

function Home() {
  return (
    <div className="container mx-auto md:gap-6 md:flex justify-center">
      <InfoCard />

      <div className="rounded-lg shadow-lg bg-zinc-800 p-4 max-w-3xl w-full divide-y divide-zinc-600">
        <Skills />
        <Education />
        <Project />
      </div>
    </div>
  );
}

export default Home;
