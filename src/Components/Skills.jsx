import React from 'react'
import SkillScroll from "./SkillScroll.jsx"

const Skills = () => {
  return (
    <div className='md:mx-24'>
        <div className='text-5xl text-center text-slate-800 font-semibold py-6'>
            I Work With
        </div>
        <div className=''>
            <SkillScroll />
        </div>
    </div>
  )
}

export default Skills