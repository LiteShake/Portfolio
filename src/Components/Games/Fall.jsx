import React from 'react'
import stlapic from "../../assets/stla.jpg"
import purppic from "../../assets/abstract-white.jpg"
import { ArrowDownSquareFill } from 'react-bootstrap-icons'

const Fall = () => {
  return (
    <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-purple-500 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-purple-300 transition duration-500 hover:scale-98' style={{ backgroundImage:`url(${purppic})`}}>
        <div className='text-3xl text-center text-purple-700 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-lg'>
            <ArrowDownSquareFill className='mx-3 my-1 size-8' />
            Fall !
        </div>
        <div className=''>
            <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                <ul>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-purple-500/50 bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    Designed and programmed a 2D falling game where the character infinately falls into the abyss.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-purple-500/50 bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    Added different power-ups to slow down the game or grant multiple lives.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-purple-500/50 bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    Added multiple themes and levels and player customizations for customized user experience.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Fall