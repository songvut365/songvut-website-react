import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";

import { getData, getImage } from "../../../actions/cloude.store";
import { InformationModel } from "../../../recoils/Home/model";
import { informationState } from "../../../recoils/Home/atom";

const InfoCard: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const fadeStyle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(0px)",
    config: { duration: 500 },
  });

  const [information, setInformation] = useRecoilState(informationState);

  useEffect(() => {
    getData("information", "info").then((data) => {
      setInformation(data as InformationModel);
    });
  }, [setInformation]);

  return (
    <div className="md:max-w-xs w-full h-fit object-cover rounded-lg shadow-lg bg-zinc-800 mb-4">
      <animated.div ref={ref} style={fadeStyle}>
        {!information.image ? (
          <div className="animate-pulse h-96 bg-zinc-500"></div>
        ) : (
          <ImageProfile imagePath={information.image} alt={information.name} />
        )}

        <div className="divide-y divide-zinc-600 px-3">
          {!information.name ? (
            <ul className="my-6 space-y-3 animate-pulse">
              <li
                className="w-full h-5 bg-yellow-300 rounded-xl"
                style={{ width: "85%" }}
              ></li>
              <li
                className="w-full h-4 bg-zinc-400 rounded-lg"
                style={{ width: "70%" }}
              ></li>
            </ul>
          ) : (
            <div className="py-4">
              <p className="text-2xl uppercase text-yellow-300 font-bold">
                {information.name}
              </p>
              <p className="text-xl uppercase text-white font-semibold">
                {information.position}
              </p>
            </div>
          )}

          <div className="py-4">
            <p className="text-xl font-semibold pb-2 text-white">Summary</p>
            {!information.summary ? (
              <ul className="mt-5 space-y-3 animate-pulse">
                <li className="w-full h-3 bg-zinc-400 rounded-md"></li>
                <li className="w-full h-3 bg-zinc-400 rounded-md"></li>
                <li className="w-full h-3 bg-zinc-400 rounded-md"></li>
                <li className="w-full h-3 bg-zinc-400 rounded-md"></li>
              </ul>
            ) : (
              <p className="first-letter:pl-4">{information.summary}</p>
            )}
          </div>

          {!information.email ? (
            <div className="py-4">
              <p className="text-xl font-semibold text-white">Contact</p>
              <ul className="mt-5 space-y-3 animate-pulse">
                <li className="w-full h-3 bg-zinc-400 rounded-md"></li>
                <li className="w-full h-3 bg-zinc-400 rounded-md"></li>
                <li className="w-full h-3 bg-zinc-400 rounded-md"></li>
              </ul>
            </div>
          ) : (
            <div className="py-4">
              <p className="text-xl font-semibold pb-2 text-white">Contact</p>
              <p>
                <i className="bi bi-envelope-fill mr-2"></i>
                {information.email}
              </p>
              <p>
                <i className="bi bi-telephone-fill mr-2"></i>
                {information.phone}
              </p>
              <p>
                <i className="bi bi-geo-alt-fill mr-2"></i>
                {information.address}
              </p>
            </div>
          )}

          <div className="py-4 flex justify-center gap-7 text-3xl">
            <a
              aria-label="github"
              href={information.githubLink}
              target="_blank"
              className="hover:scale-125"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github hover:text-yellow-300"></i>
            </a>
            <a
              aria-label="linkedin"
              href={information.linkedInLink}
              target="_blank"
              className="hover:scale-125"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin hover:text-yellow-300"></i>
            </a>
            <a
              aria-label="facebook"
              href={information.facebookLink}
              target="_blank"
              className="hover:scale-125"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook hover:text-yellow-300"></i>
            </a>
            <a
              aria-label="instagram"
              href={information.instagramLink}
              target="_blank"
              className="hover:scale-125"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram hover:text-yellow-300"></i>
            </a>
          </div>

          <div className="py-4">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all cursor-not-allowed text-sm bg-zinc-800 hover:bg-zinc-800 border-zinc-700 text-zinc-400                           focus:ring-offset-gray-800"
              disabled
            >
              RESUME
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export const ImageProfile: React.FC<{ imagePath: string; alt: string }> = ({
  imagePath,
  alt,
}) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    getImage(imagePath).then((data) => {
      setImage(data);
    });
  }, [imagePath]);

  return (
    <div>
      {image ? (
        <img
          src={image}
          alt={alt}
          className="rounded-t-lg w-full h-96 object-cover hover:cursor-pointer"
        />
      ) : (
        <div className="animate-pulse h-96 bg-zinc-500"></div>
      )}
    </div>
  );
};

export default InfoCard;
