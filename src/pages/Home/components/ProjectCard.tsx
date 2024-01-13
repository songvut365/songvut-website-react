import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { ProjectModel } from "../../../recoils/Home/model";
import { getImage } from "../../../actions/cloude.store";

type ProjectCardProps = {
  project?: ProjectModel;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}: ProjectCardProps) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const fadeStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(0px)",
    config: { duration: 500 },
  });

  const [coverImage, setCoverImage] = useState<string>("");

  useEffect(() => {
    const image = project?.cover;
    if (image !== undefined) {
      getImage(image).then((data) => {
        setCoverImage(data);
      });
    } else {
      setCoverImage("xxx");
    }
  }, [coverImage]);

  return (
    <animated.div ref={ref} style={fadeStyle}>
      <div
        className="max-w-md h-full bg-neutral-800 border border-zinc-600 rounded-lg mb-4
    flex flex-col justify-between pb-2"
      >
        {project ? (
          <>
            <div>
              <img
                alt={project.name}
                src={coverImage}
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
    </animated.div>
  );
};

export default ProjectCard;
