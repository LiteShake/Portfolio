import React from 'react'
import music from "./Assets/Music.png"
import orangepic from "../../assets/abstract-orange.jpg"


const MusicCLRA = () => {
    return (
        <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-orange-400 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-orange-200 flex flex-col lg:flex-row transition duration-500 hover:scale-98' style={{ backgroundImage: `url(${orangepic})` }}>
            <div className='flex'>
                <div className=''>
                    <img src={music} alt="Music Paper" className='shadow-xl shadow-orange-200/70' />
                </div>
            </div>
            <div>
                <div className='text-2xl text-center text-orange-500 bg-slate-100/80 backdrop-blur-md font-semibold px-3 py-4 flex flex-row w-full'>
                    Generating Music With Retention Based Latent Transformer Models (2025)
                </div>
                <div className=''>
                    <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                        <ul>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Built a custom <strong>text-to-music Transformer</strong> inspired by Microsoft’s RetNet, achieving <strong>10× faster training</strong> and <strong>20× faster inference</strong> over standard attention models.
                            </li>

                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Used <strong>CLAP</strong> for text–audio alignment, reaching a <strong>Frechet Audio Distance (FAD) of 5.53</strong> with strong semantic coherence.
                            </li>

                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-500/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Generates <strong>10-second music clips</strong> in ~<strong>2 minutes</strong> per sample, with an <strong>Inception Score up to 6.42</strong>.
                            </li>


                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-orange-500/50 bg-orange-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl flex place-content-evenly'>
                                <a href="https://ieeexplore.ieee.org/abstract/document/11063879" className='text-orange-500 bg-slate-100 p-1 px-4 rounded-md'>IEEE</a>
                                <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NVzRlGQAAAAJ&citation_for_view=NVzRlGQAAAAJ:d1gkVwhDpl0C" className='text-orange-500 bg-slate-100 p-1 px-4 rounded-md'>Google Scholar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicCLRA