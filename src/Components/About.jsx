import React from 'react'
import hikari from "../assets/ukka zoom.jpg"

const About = () => {
  return (
    <div>
        {/*text container*/}
        <div>
            Welcome! I’m Viswanathan. I work on AI and things.. I also make websites.. My passion lies in creating innovative AI tools in the creative field. With background in both AI and creative technology I design Generative AI solutions that can be of great assistance when working on a creative task which would rather act as a catalyst for creative than as a constraint.
        </div>
        {/*image container*/}
        <div>
            <img src={hikari} alt="me pic" />
        </div>
    </div>
  )
}

export default About