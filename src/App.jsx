import { useState } from 'react'

import Header from "./Components/Header.jsx"
import Hello from "./Components/Hello.jsx"
import About from "./Components/About.jsx"
import Stack from "./Components/Stack.jsx"
import Projects from "./Components/Projects.jsx"
import Research from "./Components/Research.jsx"
import Contact from "./Components/Contact.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Header />
      < Hello />
      < About />
      < Stack />
      < Projects />
      < Research />
      < Contact />
    </>
  )
}

export default App
