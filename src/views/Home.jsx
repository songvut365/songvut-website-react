import React from 'react';
import InfoCard from '../components/InfoCard';

export default function Home() {
  return (
    <div className='container mx-auto md:gap-6 md:flex justify-center'>
      <InfoCard />

      <div className='rounded-lg shadow-lg bg-slate-800 p-2 max-w-3xl'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non excepturi provident sint delectus quidem quae atque earum voluptatibus, hic molestias nemo vitae quo accusantium minima iste sed dolorum pariatur!</p>
      </div>
    </div>
  )
}
