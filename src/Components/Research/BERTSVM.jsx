import React from 'react'
import bertsvm from "./Assets/BERTSVM.png"
import bluepic from "../../assets/abstract-blue.jpg"


const BERTSVM = () => {
    return (
        <div className='bg-[url("../../assets/stla.jpg")] bg-cover bg-center text-sky-400 font-semibold p-3 m-4 rounded-xl shadow-lg shadow-sky-200 flex flex-col lg:flex-row transition duration-500 hover:scale-98' style={{ backgroundImage: `url(${bluepic})` }}>
            <div className='flex'>
                <div className=''>
                    <img src={bertsvm} alt="BERT SVM Paper" className='shadow-xl shadow-sky-200/70' />
                </div>
            </div>
            <div>
                <div className='text-2xl text-center text-sky-500 bg-slate-100/80 backdrop-blur-md font-semibold px-3 py-4 flex flex-row w-full'>
                    MIMIC III Text classification with the
                    generalization of BERT transformer model
                    synergized with XGBoost classifier
                </div>
                <div className=''>
                    <div className='py-4 md:py-2 text-white font-semibold text-xl px-2 md:px-2 m-1 place-content-center'>
                        <ul>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Proposed a BERT-based Hybrid Deep Learning model to classify <span className='underline'>20,000+ EHR records</span> in the MIMIC III dataset according to 15 different classes
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Experimented and Analyzed with 5+ BERT model variants each synergized with 3+ classification models
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl'>
                            Achieved an <span className='underline'>accuracy of 97.72%</span> by hybridizing the transformer neural network with an XGBoost classifier
                            </li>
                            <li className='transition duration-500 ease-in-out backdrop-blur-md hover:shadow-md hover:shadow-sky-500/50 bg-sky-800/60 p-3 my-2 hover:text-white hover:backdrop-blur-xl rounded-xl flex place-content-evenly'>
                                <a href="https://ieeexplore.ieee.org/abstract/document/10306707" className='text-sky-500 bg-slate-100 p-1 px-4 rounded-md'>IEEE</a>
                                <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NVzRlGQAAAAJ&citation_for_view=NVzRlGQAAAAJ:u5HHmVD_uO8C" className='text-sky-500 bg-slate-100 p-1 px-4 rounded-md'>Google Scholar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BERTSVM