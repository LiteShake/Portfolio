import React from 'react'
import BERTSVM from './Research/BERTSVM'
import AttUNet from './Research/AttUNet'
import MusicCLRA from './Research/Music'

const Research = () => {
  return (
    <div className='md:mx-20'>
      <div className='text-5xl text-center text-slate-800 font-semibold py-6'>
          Research
      </div>
      <div>
          <MusicCLRA />
          <AttUNet />
          <BERTSVM />
      </div>
    </div>
  )
}

export default Research