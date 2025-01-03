import React from 'react'
import Background from './Games/Background.jsx'
import OpenWorld from './Games/OpenWorld.jsx'
import Fall from './Games/Fall.jsx'
import Pong from './Games/Pong.jsx'

const Games = () => {
  return (
    <div className='md:mx-20'>
      <div className='text-5xl text-center text-slate-800 font-semibold py-6'>
          Personal Projects
      </div>
      <Background/>
      <OpenWorld/>
      <Fall/>
      <Pong/>
    </div>
  )
}

export default Games