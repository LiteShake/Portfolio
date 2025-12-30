import React from 'react'
import bertsvm from "./Assets/AttUNet.png"
import greenpic from "../../assets/abstract-green.png"


const AttUNet = () => {
    return (
        <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-sky-400 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-green-200 flex flex-col lg:flex-row transition duration-500 hover:scale-98' style={{ backgroundImage: `url(${greenpic})` }}>
            <div className='flex'>
                <div className=''>
                    <img src={bertsvm} alt="UNet Paper" className='shadow-xl shadow-sky-200/70' />
                </div>
            </div>
            <div>
                <div className='text-2xl text-center text-green-500 bg-slate-100/80 backdrop-blur-md font-semibold px-3 py-4 flex flex-row w-full'>
                    Segmentation of Instances in an Image with Custom Neural Networks (2024)
                </div>
                <div className=''>
                    <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                        <ul>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-green-500/50 bg-green-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Created a novel UNet architecture with chained series of Attention blocks for fast and accurate image and object segmentation.
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-green-500/50 bg-green-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Experimented and trained with various datasets for the UNet to work universally.
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-green-500/50 bg-green-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Achieved an <span className='underline'>IoU score of  of 75%</span> and a minimal loss of 1.5 per batch with a downsampling rate of 64.
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-green-500/50 bg-green-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl flex place-content-evenly'>
                                <a href="https://ieeexplore.ieee.org/abstract/document/10574618" className='text-green-500 bg-slate-100 p-1 px-4 rounded-md'>IEEE</a>
                                <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NVzRlGQAAAAJ&citation_for_view=NVzRlGQAAAAJ:u-x6o8ySG0sC" className='text-green-500 bg-slate-100 p-1 px-4 rounded-md'>Google Scholar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttUNet