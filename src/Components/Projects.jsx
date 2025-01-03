import React from 'react'
import StellaLM from './Projects/StellaLM.jsx'
import UkkaDiff from './Projects/UkkaDiff.jsx'
import Companion from './Projects/Companion.jsx'
import Clara from './Projects/Clara.jsx'

const Projects = () => {
  return (
    <div className='md:mx-20'>
      <div className='text-5xl text-center text-slate-800 font-semibold py-6'>
          AI Projects
      </div>
      <StellaLM/>
      <UkkaDiff/>
      <Companion/>
      <Clara/>
    </div>
  )
}

export default Projects