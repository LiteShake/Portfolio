import React from 'react'
import stlapic from "../../assets/stla.jpg"
import bluepic from "../../assets/abstract-blue.jpg"
import { Discord } from 'react-bootstrap-icons'


const Surround = () => {
    return (
        <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-sky-400 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-sky-200 transition duration-500 hover:scale-98' style={{ backgroundImage: `url(${bluepic})` }}>
            <div className='text-3xl text-center text-sky-500 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-md'>
                <Discord className='mx-3 my-1 size-8' />
                AI Surround Sound
            </div>
            <div className=''>
                <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                    <ul>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Developed and trained a novel deep learning model to convert mono audio to surround audio using a video context using 360 video and 3D audio datasets.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Achieved a 1.6% lower, 9.4% better temporal coherence and 19.5 dB Signal to Noise Ratio.</li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Tested and reproduced surround effects from multiple movies from video clips and mono audio.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Surround