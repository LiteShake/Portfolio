import React from 'react'
import stlapic from "../../assets/stla.jpg"
import bluepic from "../../assets/abstract-blue.jpg"
import { Discord } from 'react-bootstrap-icons'


const StellaLM = () => {
    return (
        <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-sky-400 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-sky-200 transition duration-500 hover:scale-98' style={{ backgroundImage: `url(${bluepic})` }}>
            <div className='text-3xl text-center text-sky-500 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-md'>
                <Discord className='mx-3 my-1 size-8' />
                This AI speaks too much
            </div>
            <div className=''>
                <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                    <ul>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            A language model based on the pretty popular transformer decoder architecture pretrained and finetuned in fresh extracted discord and reddit conversations for casual conversations.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            The main task of this model is to do question answering but we chain the questions with previous data (also known as context) and give it to the model essentially making it engage in whole conversations.
                        </li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            This language model works in the representation space and is quantized for maximum efficiency in very less time.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StellaLM