import React from 'react';

import Home from './views/Home';

function App() {

  return (
    <div className="bg-slate-900 text-slate-200 p-4">
      <Home />

      <div className='absolute left-0 text-center font-semibold w-full mt-4 py-2 bg-slate-800'>
        <p>Copyright © 2022 All rights reserved.</p>
      </div>
    </div>
  )
}

export default App
