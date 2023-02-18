import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { db } from "../main";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import type { Project } from "./ProjectCard";

function Project() {
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const q = query(collection(db, "projects"), orderBy("id"));
    const querySnapshot = await getDocs(q);
    const allProjects = querySnapshot.docs.map((doc) => doc.data() as Project);
    setProjects(allProjects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="py-4">
      <h1 className="text-3xl font-semibold text-yellow-300 mb-4">PROJECTS</h1>

      {projects.length > 0 ? (
        <div className="md:grid md:justify-center lg:grid-cols-2  gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className="md:grid md:justify-center lg:grid-cols-2  gap-4">
          <ProjectCard />
          <ProjectCard />
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href="https://github.com/songvut365"
          target="_blank"
          className="my-4 uppercase font-semibold text-yellow-300 border border-zinc-600 py-3 px-5 rounded-md shadow-md
          hover:border-zinc-700 active:bg-neutral-800 active:text-zinc-200"
        >
          more projects
        </a>
      </div>
    </div>
  );
}

export default Project;