import React from 'react'
import purppic from "../../assets/abstract-orange.jpg"
import { DiscFill } from 'react-bootstrap-icons'

const Clara = () => {
  return (
    <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-orange  -500 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-orange-300 transition duration-500 hover:scale-98' style={{ backgroundImage:`url(${purppic})`}}>
        <div className='text-3xl text-center text-orange-400 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-lg'>
            <DiscFill className='mx-3 my-1 size-8 animate-spin'/>
            Music generator !
        </div>
        <div className=''>
            <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                <ul>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    Text-to-Music generator based on a custom-build transformer model inspired from Microsoft's <a href='https://arxiv.org/abs/2307.08621'>Paper</a> on optimizing Transformers.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    The text is processed using the <a href="https://arxiv.org/pdf/2211.06687">CLAP</a> model which is trained specifically to understand the relationship between Text and Audio.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    Can create 10 second clips of any text that is sent to input in few minutes (still depends on hardware power tho).
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Clara