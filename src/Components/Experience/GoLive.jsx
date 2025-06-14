import React from 'react'
import stlapic from "../../assets/stla.jpg"
import bluepic from "../../assets/abstract-blue.jpg"
import { Controller } from 'react-bootstrap-icons'


const GoLive = () => {
    return (
        <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-sky-400 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-sky-200 transition duration-500 hover:scale-98' style={{ backgroundImage: `url(${bluepic})` }}>
            <div className='text-3xl text-center text-sky-500 font-semibold px-3 py-4 flex flex-row w-full bg-white/80 backdrop-blur-md'>
                <Controller className='mx-3 my-1 size-8' />
                Game Programmer Intern | GoLive Games Studios | Jan 2025 - Apr 2025

            </div>
            <div className='flex flex-col md:flex-row justify-left items-center flex-wrap'>
                <img src="https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white" alt="Unity Badge" className='mx-2 my-1' />
                <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C# Badge" className='mx-2 my-1' />
                <img src="https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++ Badge" className='mx-2 my-1' />
                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JS Badge" className='mx-2 my-1' />
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" alt="TS Badge" className='mx-2 my-1' />
                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="Mongo Badge" className='mx-2 my-1' />

            </div>
            <div className=''>
                <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                    <ul>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Added contributions on multiple product and consultancy based projects using the Unity Engine and
                            C# working on Graphics Renderers and Multiplayer Protocols.</li>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Developed and deployed a solid backend enviroment and APIs for various games involving user au
                            thentication, AD monetization and in-app purchases./</li>                
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Involved in optimizing multiple game projects reducing hardware usage bu 10% increasing performance by 13% and server response time by 30%.                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GoLive