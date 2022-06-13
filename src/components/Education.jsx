import React from 'react'

import { education } from '../assets/data';

export default function Education() {
  return (
    <div className='py-4'>
      <h1 className='text-3xl font-semibold text-blue-500 mb-4'>EDUCATION</h1>

      <div className='border rounded-lg border-gray-700 bg-gray-800 py-4 mb-2'>
        {education.map(e => (
          <div className='flex pr-2' key={e.name}> 
            <div className='pt-2 px-4 flex flex-col'>
              <div className='h-4 w-3 bg-blue-500 rounded-full mb-2'></div>
              <div className='h-full w-0.5 bg-blue-500 mx-auto'></div>
            </div>
            <div>
              <p className='font-semibold text-xl text-white'>{e.name}</p>
              <p>{e.degree}, {e.major}</p>
              <p>{e.date}</p>
              <p>GPA: {e.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
