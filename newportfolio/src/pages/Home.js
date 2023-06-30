import React, { useEffect } from 'react'
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import "../Styles/Home.css"
import Typewriter from "typewriter-effect"
import Confetti from 'react-confetti'
import TextSphere from '../components/TextSphere'

function Home() {
  return (
    <div className='home'>
      <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.03}/>
      <div className='about'>
      <div className="into">
      <h2>      <Typewriter 
        onInit={(typewriter) => {
          typewriter.typeString("Welcome, glad to have you here!")
          .pauseFor(2000)
          .deleteAll()
          .typeString("I am a Fourth Year Computer Science student at TMU")
          .pauseFor(2000)
          .deleteAll()
          .typeString("My name is Arshdeep Badhan!")
          .start();
        }}
      /></h2>
      </div>
      <div className='prompt'>
      <p>
        A software developer with passion for learning and creating.
      </p>
      <a href="https://www.linkedin.com/in/arshdeep-badhan-68aa27160/"><LinkedInIcon/> </a>
      <a href="https://github.com/ArshdeepSB"><GithubIcon/></a> 
      <a href="mailto:arshdeep.badhan@ryerson.ca"><EmailIcon/></a>
      </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Tools and Technologies</h2>
            <TextSphere/>
            <span>VSCode, Android Studio, React, Git, Linux, Azure, PowerBi, Emacs, Pharo, Databases</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java, Python, C, Rust, HTML, CSS, JavaScript, Elixir, SmallTalk, Lisp, Perl, SQL, Scripting</span>
          </li>
        </ol>
      </div> </div>
  )
}

export default Home