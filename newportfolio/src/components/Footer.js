import React from 'react'
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="mailto:arshdeep.badhan@ryerson.ca"><EmailIcon/></a>
        <a href="https://www.linkedin.com/in/arshdeep-badhan-68aa27160/"><LinkedInIcon/></a>
        <a href="https://github.com/ArshdeepSB"><GithubIcon/></a>
        </div> 
        <p> &copy; 2022 ArshdeepBadhan.com</p>
        </div>
  )
}

export default Footer