import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";

import { getData } from "../../../actions/cloude.store";
import { skillState } from "../../../recoils/Home/atom";

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const fadeStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(0px)',
    config: { duration: 500 },
  });

  const [skills, setSkills] = useRecoilState(skillState);

  useEffect(() => {
    getData("information", "skills").then(data => {
      setSkills(data?.skills ?? []);
    })
  }, []);

  return (
    <div className="pb-2">
      <animated.div ref={ ref } style={ fadeStyle } >
      <h1 className="text-3xl font-semibold text-yellow-300">SKILLS</h1>

      {skills.length === 0 ? (
        // if skills is empty
        <div className="py-4">
          {Array(6)
            .fill(0)
            .map((value, index) => (
              <div
                key={index}
                className="-mt-px first:rounded-t-lg last:rounded-b-lg h-16 px-4 border border-zinc-600"
              >
                <ul className="mt-6 space-y-3 animate-pulse">
                  <li
                    className="w-full h-3 bg-zinc-400 rounded-md"
                    style={{ width: "40%" }}
                  ></li>
                </ul>
              </div>
            ))}
        </div>
      ) : (
        // if skills not empty
        <div className="hs-accordion-group my-4" data-hs-accordion-always-open>
          {skills.map((skill) => (
            <div
              className="hs-accordion border -mt-px first:rounded-t-lg last:rounded-b-lg bg-neutral-800  border-zinc-600"
              id="hs-bordered-heading-two"
              key={skill.name}
            >
              <button
                className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-semibold text-left text-lg transition py-4 px-5  hs-accordion-active:text-white text-zinc-300 hover:text-zinc-400"
                aria-controls="hs-basic-bordered-collapse-two"
              >
                {skill.name}
              </button>

              {skill.name === "Language Proficiency" ? (
                // Language Proficiency
                <div
                  id="hs-basic-bordered-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-two"
                >
                  <div className="pb-4 px-5 flex text-center justify-center flex-wrap gap-8 box-border">
                    {skill.details.map((detail) => (
                      <div key={detail.name}>
                        <span
                          className="mb-1 inline-flex items-center justify-center h-[3rem] w-[3rem]"
                          style={{ backgroundColor: detail.color }}
                        >
                          <span className="text-lg font-medium text-white leading-none">
                            {detail.short}
                          </span>
                        </span>
                        <p className="text-sm font-semibold">
                          {detail.name} : {detail.level}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Skills
                <div
                  id="hs-basic-bordered-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-two"
                >
                  <div className="pb-4 px-5 flex text-center justify-center flex-wrap self-center gap-8 box-border">
                    {skill.details.map((detail) => (
                      <div key={detail.name} id={detail.name} className="flex flex-col  items-center">
                        <img src={detail.image} className="h-16" />
                        <p className="text-sm font-semibold">{detail.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      </animated.div>
    </div>
  );
}

export default Skills;