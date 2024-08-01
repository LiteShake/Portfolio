import { useState } from 'react'
import './App.css'

import Header from "./Components/Header.jsx"
import Hello from "./Components/Hello.jsx"
import About from "./Components/About.jsx"
import Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Research from "./Components/Research.jsx"
import Contact from "./Components/Contact.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-100 p-6'>
      < Header />
      < Hello />
      < About />
      < Skills />
      < Projects />
      < Research />
      < Contact />
      < Footer />
    </div>
  )
}

export default App
