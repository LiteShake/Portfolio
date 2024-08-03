import React from 'react'
import stlapic from "../../assets/stla.jpg"
import pinkpic from "../../assets/abstract-pink.jpg"
import { Person, PersonBoundingBox } from 'react-bootstrap-icons'

const UkkaDiff = () => {  
    return (
    <div className='bg-[url("../../assets/stla.jpg")] text-pink-500 font-semibold p-3 m-4 rounded-xl shadow-lg place-content-center shadow-pink-200' style={{ backgroundImage:`url(${pinkpic})`}}>
        <div>
            <div className='text-3xl text-center text-pink-500 font-semibold px-3 py-4 flex flex-row w-full'>
                <PersonBoundingBox className='mx-3 my-1 size-8'/>
                These people don’t exist ??
            </div>
            <div className=''>
                <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                    <ul>
                        <li className='transition duration-500 ease-in-out backdrop-blur-sm bg-pink-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        A diffusion based image generation model trained on the Celeb32 dataset that can generate images of well… people.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-sm bg-pink-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        Diffusion is a thermodynamic process in which molecules move from a region of higher concentration to lower concentration.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-sm bg-pink-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        Using this theory we can break an irregular data distribution(image) which is like to a normal distribution(gaussian noise) in which data is uniform.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-sm bg-pink-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        And we train the model to do the reverse where we generate people from noise.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UkkaDiff