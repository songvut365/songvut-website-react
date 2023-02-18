import React from "react";

type Project = {
  cover: string;
  name: string;
  detail: string;
  link: string;
};

type ProjectCardProps = {
  project?: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="max-w-md h-full bg-neutral-800 border border-zinc-600 rounded-lg mb-4
    flex flex-col justify-between pb-2"
    >
      {project ? (
        <>
          <div>
            <img
              src={project.cover}
              className="rounded-t-md w-full h-48 object-cover hover:cursor-pointer"
            />

            <div className="flex flex-col px-2 pt-2">
              <a
                href={project.link}
                target="_blank"
                className="text-lg font-semibold text-white hover:text-zinc-400"
              >
                {project.name}
              </a>
              <p className="text-sm first-letter:pl-2">{project.detail}</p>
            </div>
          </div>

          <div className="text-right px-4 mt-2">
            <a
              href={project.link}
              target="_blank"
              className="uppercase text-sm font-semibold hover:text-zinc-400"
            >
              more details
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-t-md w-full h-48 object-cover hover:cursor-pointer bg-zinc-400 animate-pulse"></div>

          <div className="flex flex-col px-2 pt-2">
            <ul className="animate-pulse py-3 space-y-3">
              <li
                className="w-full h-3 bg-zinc-400 rounded-md"
                style={{ width: "40%" }}
              ></li>
              <li
                className="w-full h-3 bg-zinc-400 rounded-md"
                style={{ width: "100%" }}
              ></li>
              <li
                className="w-full h-3 bg-zinc-400 rounded-md"
                style={{ width: "100%" }}
              ></li>
              <li
                className="w-full h-3 bg-zinc-400 rounded-md"
                style={{ width: "80%" }}
              ></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectCard;
export type { Project };