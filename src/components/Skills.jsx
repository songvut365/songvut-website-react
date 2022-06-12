import React from 'react'
import { skills } from '../assets/data'

export default function Skills() {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-blue-500'>Skills</h1>

      <div className="hs-accordion-group my-4" data-hs-accordion-always-open>
        { skills.map(skill => (
          <div className="hs-accordion border -mt-px first:rounded-t-lg last:rounded-b-lg bg-gray-800 border-gray-700" id="hs-bordered-heading-two" key={skill.name}>

            <button className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-semibold text-left text-lg transition py-4 px-5  hs-accordion-active:text-blue-600 text-white hover:text-gray-400" aria-controls="hs-basic-bordered-collapse-two">
              {skill.name}
            </button>

            <div id="hs-basic-bordered-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
              <div className="pb-4 px-5">
                {skill.details.map(detail=> (
                  <div>
                    <p>{detail.name}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
        
      </div>
        
    </div>
  )
}
