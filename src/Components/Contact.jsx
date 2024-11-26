import React from 'react'
import { Linkedin } from 'react-bootstrap-icons'
import { Github } from 'react-bootstrap-icons'

const Contact = () => {
  return (
    <div className='text-center text-slate-200 font-semibold py-6 bg-slate-800 justify-items-center ' >
      <div className='text-5xl p-4 m-3'>
          Contact Me
      </div>
      <a href="mailto:viswan.v2003@gmail.com" className='text-slate-800 bg-slate-200 w-80 content-center p-3 rounded-full'>viswan.v2003@gmail.com</a>
    
      <div className='flex flex-row w-full place-content-center p-6'>
        <div className='flex flex-row'>
          <a href="mailto:viswan.v2003@gmail.com" className='text-slate-800 bg-slate-200 w-40 content-center p-3 m-2 rounded-full flex'><Linkedin className='size-5 mx-3'/>LinkedIn</a>
          <a href="mailto:viswan.v2003@gmail.com" className='text-slate-800 bg-slate-200 w-40 content-center p-3 m-2 rounded-full flex'><Github className='size-5 mx-3'/>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Contact