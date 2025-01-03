import React from 'react'
import stlapic from "../../assets/stla.jpg"
import pinkpic from "../../assets/abstract-pink.jpg"
import { Person, PersonBoundingBox } from 'react-bootstrap-icons'

const Background = () => {  
    return (
    <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-pink-500 font-semibold p-3 m-4 rounded-xl shadow-lg place-content-center shadow-pink-200 transition duration-500 hover:scale-98' style={{ backgroundImage:`url(${pinkpic})`}}>
        <div>
            <div className=''>
                <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                    <ul>
                        <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-pink-500/50 bg-pink-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                        This section contains projects that I did on various other fields as a hobby mostly in Game Design and Development using various tools and engines like Unity, Unreal Engine and Roblox.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Background