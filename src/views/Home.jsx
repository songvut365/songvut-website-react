import React from 'react';
import InfoCard from '../components/InfoCard';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='container mx-auto md:gap-6 md:flex justify-center'>
      <InfoCard />

      <div className='rounded-lg shadow-lg bg-slate-800 p-4 max-w-2xl w-full'>        
        <Skills />
      </div>
    </div>
  )
}
