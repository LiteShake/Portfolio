import React from 'react'

const Header = () => {
  return (
    <header className=" p-4 sticky top-0 z-50 relative bg-slate-800/60 backdrop-blur-xl">
      <ul className='flex flex-row place-content-evenly'>
        <li>
          <a href='' className='p-2 m-2 font-bold text-white bg-sky-500 rounded-full'>Resume</a>
        </li>
        <li>
          <a href='' className='p-2 m-2 font-bold text-white bg-sky-500 rounded-full'>Viswanathan</a>
        </li>
        <li>
          <a href='' className='p-2 m-2 font-bold text-white bg-sky-500 rounded-full'>Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Header