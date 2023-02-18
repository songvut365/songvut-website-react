import React, { useEffect, useState } from "react";
import { db } from "../main";
import { doc, getDoc } from "firebase/firestore";

type Education = {
  name: string;
  degree: string;
  major: string;
  date: string;
  gpa: number;
};

function Education() {
  const [education, setEducation] = useState<Education[]>([]);

  const getEducation = async () => {
    const educationRef = doc(db, "information", "education");
    const educationDoc = await getDoc(educationRef);
    const data = educationDoc.data();
    setEducation(data?.education ?? []);
  };

  useEffect(() => {
    getEducation();
  }, []);

  return (
    <div className="py-4">
      <h1 className="text-4xl font-semibold text-yellow-300 mb-4">EDUCATION</h1>

      {education.length === 0 ? (
        <div className="w-full my-4 px-6 pb-5 border rounded-lg border-zinc-600">
          <ul className="mt-5 space-y-3 animate-pulse">
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "60%" }}
            ></li>
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "40%" }}
            ></li>
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "40%" }}
            ></li>
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "20%" }}
            ></li>
          </ul>

          <ul className="mt-5 space-y-3 animate-pulse">
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "60%" }}
            ></li>
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "40%" }}
            ></li>
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "40%" }}
            ></li>
            <li
              className="h-3 bg-zinc-500 rounded-md"
              style={{ width: "20%" }}
            ></li>
          </ul>
        </div>
      ) : (
        <div className="border rounded-lg border-zinc-600 bg-neutral-800 py-4 mb-2">
          {education.map((e) => (
            <div className="flex pr-2" key={e.name}>
              <div className="pt-2 px-4 flex flex-col">
                <div className="h-4 w-3 bg-yellow-300 rounded-full mb-2"></div>
                <div className="h-full w-0.5 bg-yellow-300 mx-auto"></div>
              </div>
              <div>
                <p className="font-semibold text-xl text-white">{e.name}</p>
                <p>
                  {e.degree}, {e.major}
                </p>
                <p>{e.date}</p>
                <p>GPA: {e.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Education;