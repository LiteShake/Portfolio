import React from 'react'
import boipic from "../assets/weirdcopterlise.jpg"

const About = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row-reverse md:mx-24 '>
      <div className='py-4 text-slate-700 font-semibold text-2xl px-2 md:px-6 m-1 place-content-center text-center md:text-left'>
        I’m <span className='bg-gradient-to-r from-pink-600 to-pink-400 text-transparent bg-clip-text' >Viswanathan</span>. Studied Computer Science specializing in Artificial Intelligence..I work on <span className='text-green-500'>AI</span> and things.. 
        I also make websites.... and games..
        My passion lies in creating innovative <span className='underline'>AI tools in the creative field</span>. 
        With background in both AI and creative technology I design <span className='bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text'>Generative AI</span> solutions 
        that can be of great assistance when working on a creative task which would rather act as a <span className='underline'>catalyst</span> for creativity than as a constraint.
      </div>
      <div className='flex p-4 place-content-center'>
          <img src={boipic} alt="Picture" className='md:w-auto px-20 md:px-0'/>
      </div>
    </div>
  )
}

export default About