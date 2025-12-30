import React from 'react'
import stlapic from "../../assets/stla.jpg"
import purppic from "../../assets/abstract-white.jpg"
import { Laptop } from 'react-bootstrap-icons'

const Companion = () => {
  return (
    <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-purple-500 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-purple-300 transition duration-500 hover:scale-98' style={{ backgroundImage:`url(${purppic})`}}>
        <div className='text-3xl text-center text-purple-700 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-lg'>
            <Laptop className='mx-3 my-1 size-8' />
            My Best Buddy !
        </div>
        <div className=''>
            <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                <ul>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-purple-500/50 bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    A virtual assistant / remote control for my laptop which can be controlled using python running in a smartphone or via Discord.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-purple-500/50 bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    A server side application that uses AI to achieve ease-of-use for my computer along with a visual terminal application to control it.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-purple-500/50 bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    Uses an MoE like orchestration of Mistral and Phi3 on Llama-cpp to understand language and emotions and talk like a friend.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Companion