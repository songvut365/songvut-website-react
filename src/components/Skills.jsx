import React from 'react'
import { skills } from '../assets/data'

export default function Skills() {
  return (
    <div className='pb-2'>
      <h1 className='text-3xl font-semibold text-blue-500'>SKILLS</h1>

      <div className="hs-accordion-group my-4" data-hs-accordion-always-open>
        { skills.map(skill => (
          <div className="hs-accordion border -mt-px first:rounded-t-lg last:rounded-b-lg bg-gray-800 border-gray-700" id="hs-bordered-heading-two" key={skill.name}>

            <button className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-semibold text-left text-lg transition py-4 px-5  hs-accordion-active:text-blue-600 text-white hover:text-gray-400" aria-controls="hs-basic-bordered-collapse-two">
              {skill.name}
            </button>

            {skill.name === "Language Proficiency" ? (
              <div id="hs-basic-bordered-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                <div className="pb-4 px-5 flex text-center justify-center flex-wrap gap-8 box-border">
                  {skill.details.map(detail=> (
                    <div key={detail.name}>
                      <span className={"mb-1 inline-flex items-center justify-center h-[3rem] w-[3rem] " + detail.color}>
                        <span className="text-lg font-medium text-white leading-none">{detail.short}</span>
                      </span>
                      <p className='text-sm font-semibold'>{detail.name} : {detail.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div id="hs-basic-bordered-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                <div className="pb-4 px-5 flex text-center justify-center flex-wrap gap-8 box-border">
                  {skill.details.map(detail=> (
                    <div key={detail.name}>
                      <img src={detail.image} className="h-16" />
                      <p className='text-sm font-semibold'>{detail.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
      </div>
        
    </div>
  )
}
