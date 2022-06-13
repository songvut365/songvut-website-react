import React from 'react'

import { information } from '../assets/data'

export default function InfoCard() {
  return (
    <div className='max-w-sm md:max-w-xs h-fit rounded-lg shadow-lg bg-slate-800 mb-4'>
      <img src={information.image} className='rounded-t-lg' />
      
      <div className='divide-y divide-slate-500 px-3'>
        <div className='py-4'>
          <p className='text-2xl uppercase text-blue-500 font-bold'>{information.name}</p>
          <p className='text-xl uppercase text-blue-300 font-semibold'>{information.position}</p>
        </div>

        <div className='py-4'>
          <p className='text-xl font-semibold pb-2 text-white'>Summary</p>
          <p className='first-letter:pl-4'>{information.summary}</p>
        </div>

        <div className='py-4'>
          <p className='text-xl font-semibold pb-2 text-white'>Contact</p>
          <p><i className="bi bi-envelope-fill mr-2"></i>{information.email}</p>
          <p><i className="bi bi-telephone-fill mr-2"></i>{information.phone}</p>
          <p><i className="bi bi-geo-alt-fill mr-2"></i>{information.address}</p>
        </div>

        <div className='py-4 flex justify-center gap-7 text-3xl'>
          <a href={information.githubLink} target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a href={information.linkedInLink} target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={information.facebookLink} target="_blank">
            <i className="bi bi-facebook"></i>
          </a>
          <a href={information.instagramLink} target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        <div className='py-4'>
          <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-500 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all cursor-not-allowed text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" disabled>
            RESUME    
          </button>
        </div>
      </div>
    </div>
  )
}
