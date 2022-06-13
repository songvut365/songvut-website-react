import React from 'react';

import { projects } from '../assets/data';

import ProjectCard from './ProjectCard';

export default function Project() {
  return (
    <div className='py-4'>
      <h1 className='text-3xl font-semibold text-blue-500 mb-4'>PROJECTS</h1>

      <div className='md:grid md:justify-center lg:grid-cols-2  gap-4'>
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      
      <div className='text-center'>
        <button className='my-4 uppercase font-semibold border border-slate-200 py-2 px-4 rounded-md shadow-lg
        hover:text-slate-400 hover:border-slate-400 active:bg-slate-700 active:text-slate-200'>
          more projects
        </button>
      </div>
    </div>
  )
}
