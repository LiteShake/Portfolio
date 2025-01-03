import { useState } from 'react'
import './App.css'

import Header from "./Components/Header.jsx"
import Hello from "./Components/Hello.jsx"
import About from "./Components/About.jsx"
import Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Games from "./Components/Games.jsx"
import Research from "./Components/Research.jsx"
import Contact from "./Components/Contact.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-100'>
      < Hello className='' />
      <div className='p-6'> 
        < About />
        < Skills />
        < Projects />
        < Games />
        < Research />
      </div>
      < Contact />
    </div>
  )
}

export default App
