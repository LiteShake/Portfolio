import React from 'react'
import ponggif from "./Assets/PongGif.gif"
import purppic from "../../assets/abstract-orange.jpg"
import { DiscFill } from 'react-bootstrap-icons'


const Pong = () => {
  return (
    <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-orange  -500 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-orange-300 flex-col lg:flex-row transition duration-500 hover:scale-98' style={{ backgroundImage:`url(${purppic})`}}>
        <div className='flex'>
            <img src={ponggif} alt="Fall Demo" className='shadow-xl shadow-sky-200/70 object-scale-down h-72' />
        </div>
        <div className=''>
            <div className='text-3xl text-center text-orange-400 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-lg'>
                <DiscFill className='mx-3 my-1 size-8'/>
                Pong !
            </div>
            <div className=''>
                <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                    <ul>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        Built a simple pong game using the Unity Engine.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        The player controls the game by using the mobile's accelerometer by tilting the mobile.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        Added places in the games for unobtrusive advertisements.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pong