import React from 'react'
import Typewriter from 'typewriter-effect'
import { CaretDownSquareFill } from 'react-bootstrap-icons'

const Hello = () => {
  return (
    <div className='bg-slate-700 w-full h-dvh text-center place-content-center text-6xl md:text-7xl text-slate-200 font-bold'>
      <div className='flex flex-col place-content-center text-center'>
        <Typewriter
          options={{
            strings: [
              'Hello !', 'こんにちは', "Guten Tag!",
              "नमस्ते", "வணக்கம்", "здороваться",
              "안녕하세요", "你好", "Bonjour!",
              "¡Hola!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <div className='text-2xl m-6 p-2 bg-slate-200 text-slate-700 lg:mx-96'>
          Viswanathan V
        </div>
        <div className='text-lg italic mx-8'>
          Developing and training softwares that can think.
        </div>
      </div>
    </div>
  )
}

export default Hello