import React from 'react'
import cargif from "./Assets/CarGif.gif"
import bluepic from "../../assets/abstract-blue.jpg"
import { MapFill } from 'react-bootstrap-icons'


const OpenWorld = () => {
    return (
        <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-sky-400 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-sky-200 flex-col lg:flex-row transition duration-500 hover:scale-98' style={{ backgroundImage: `url(${bluepic})` }}>
            <div className='flex w-full flex place-content-evenly'>
                <div className=''>
                    <img src={cargif} alt="OpeWorld Demo" className='shadow-xl shadow-sky-200/70 object-scale-down h-72' />
                </div>
            </div>
            <div>
                <div className='text-3xl text-center text-sky-500 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-md'>
                    <MapFill className='mx-3 my-1 size-8' />
                    OpenWorld Experiment
                </div>
                <div className=''>
                    <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                        <ul>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Built a simple open world city game with characters and vehicles using Unity..
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Designed and Modeled characters and vehicles in Blender and added movements, physics and inter-
                            actions with the environment.
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Optimized the game using LOD systems, Anti aliasing and lighting systems to balance quality and per-
                            formance.
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl flex place-content-evenly'>
                                <a href="https://github.com/LiteShake/FreeRoam" className='text-sky-500 bg-slate-100 p-1 px-4 rounded-md'>Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenWorld