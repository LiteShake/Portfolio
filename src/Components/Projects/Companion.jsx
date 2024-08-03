import React from 'react'
import stlapic from "../../assets/stla.jpg"
import purppic from "../../assets/abstract-white.jpg"
import { Laptop } from 'react-bootstrap-icons'

const Companion = () => {
  return (
    <div className='bg-[url("../../assets/stla.jpg")] text-purple-500 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-purple-300' style={{ backgroundImage:`url(${purppic})`}}>
        <div className='text-3xl text-center text-purple-700 font-semibold px-3 py-4 flex flex-row w-full'>
            <Laptop className='mx-3 my-1 size-8' />
            My Best Buddy !
        </div>
        <div className=''>
            <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                <ul>
                    <li className='transition duration-500 ease-in-out backdrop-blur-sm bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    A language model based on the pretty popular transformer decoder architecture pretrained and finetuned in freshly extracted discord and reddit conversations for casual conversations.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-sm bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    The main task of this model is to do question answering but we chain the questions with previous data (also known as context) and give it to the model essentially making it engage in whole conversations.
                    </li>
                    <li className='transition duration-500 ease-in-out backdrop-blur-sm bg-purple-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                    This language model works in the representation space and is quantized for maximum efficiency in very less time.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Companion