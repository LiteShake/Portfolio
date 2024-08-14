import React from 'react'
import stlapic from "../../assets/stla.jpg"
import orangepic from "../../assets/abstract-orange.jpg"
import { DiscFill } from 'react-bootstrap-icons'

const Clara = () => {
  return (
    <div className='text-white font-semibold p-3 m-4 rounded-xl shadow-lg shadow-orange-200 bg-cover bg-center transition duration-500 hover:scale-98' style={{ backgroundImage:`url(${orangepic})`}}>
        <div className='text-5xl place-content-center transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-5 py-8 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl flex flex-row'>
            <div className='place-content-center m-3 animate-spin'>
                <DiscFill/>
            </div>
            <div className='m-3'>
            Coming Soon
            </div>
        </div>
    </div>
  )
}

export default Clara