import { Typography } from '@mui/material'
// import {useState} from 'react'
import  './about.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';




function About() {

  // const[name,setName]=useState("kishore");
  return (
    <Typography className='about'>
       <div className='container-about container-1'>
           <div className='imgContainer'>
             <img src="profile.svg" alt='profile' height="100px" width="100px" />
           </div>
          <div className='lowerContainer'>
            <h4>Alok</h4>
             <p> Column Column Lorem ipsum dolor sit, amet consectetur
                adipis dfhidhdoidjdoi eiuhdiehdioeh
             </p>
          </div>
          <div className="icons-container">
                <ul className="icon-list">
               
                    <a className="icon"
                      href="https://www.facebook.com/profile.php?id=100085039485933"
                      target="blank">
                      <FacebookIcon/>
                    </a>
               
                
                    <a className="icon"
                      href="https://www.instagram.com/prabhat.net267?r=nametag"
                      target="blank">
                      <InstagramIcon/>
                    </a>
          
             
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <LinkedInIcon/>
                    </a>
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <GitHubIcon/>
                    </a>
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <EmailIcon/>
                    </a>
              
              
                </ul>
              </div>
      </div>

      <div className='container-about container-2'>
           <div className='imgContainer'>
             <img src="male-pro.svg" alt='profile' height="100px" width="100px" />
           </div>
          <div className='lowerContainer'>
            <h4>Kishore</h4>
             <p> Column Column Lorem ipsum dolor sit, amet consectetur
                adipis dfhidhdoidjdoi eiuhdiehdioeh
             </p>
          </div>
          <div className="icons-container">
                <ul className="icon-list">
               
                    <a className="icon"
                      href="https://www.facebook.com/profile.php?id=100085039485933"
                      target="blank">
                      <FacebookIcon/>
                    </a>
               
                
                    <a className="icon"
                      href="https://www.instagram.com/prabhat.net267?r=nametag"
                      target="blank">
                      <InstagramIcon/>
                    </a>
          
             
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <LinkedInIcon/>
                    </a>
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <GitHubIcon/>
                    </a>

                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <EmailIcon/>
                    </a>
              
                </ul>
              </div>
      </div>

      <div className='container-about container-3'>
           <div className='imgContainer'>
             <img src="female-pro.svg" alt='profile' height="100px" width="100px" />
           </div>
          <div className='lowerContainer'>
            <h4>Pooja</h4>
             <p> Column Column Lorem ipsum dolor sit, amet consectetur
                adipis dfhidhdoidjdoi eiuhdiehdioeh
             </p>
          </div>
          <div className="icons-container">
                <ul className="icon-list">
               
                    <a className="icon"
                      href="https://www.facebook.com/profile.php?id=100085039485933"
                      target="blank">
                      <FacebookIcon/>
                    </a>
               
                
                    <a className="icon"
                      href="https://www.instagram.com/prabhat.net267?r=nametag"
                      target="blank">
                      <InstagramIcon/>
                    </a>
          
             
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <LinkedInIcon/>
                    </a>
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <GitHubIcon/>
                    </a>
                    <a className="icon"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank">
                      <EmailIcon/>
                    </a>
              
              
                </ul>
              </div>
      </div>
   </Typography>
  )
}

export default About