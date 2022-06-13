import React from 'react'

export default function ProjectCard(props) {
  const project = props.project;

  return (
    <div className='shadow-lg max-w-md h-full bg-gray-800 border border-gray-700 rounded-lg mb-4
    flex flex-col justify-between pb-2'>
      <div>
        <img src={project.image} className="rounded-t-md w-full h-48 object-cover" />
        <div className='flex flex-col px-2 pt-2'>
          <a href={project.link} target="_blank" className='text-lg font-semibold hover:text-slate-400'>
            {project.name}
          </a>
          <p className='text-sm first-letter:pl-2'>{project.detail}</p>  
        </div>
      </div>
      
      <div className='text-right px-4 mt-2'>
        <a href={project.link} target="_blank" className='uppercase text-sm font-semibold hover:text-slate-400'>
          more details
        </a>
      </div>
    </div>
  )
}
