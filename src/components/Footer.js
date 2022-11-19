import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <>
      <div className="container-footer bg-dark text-light">
        <div className="footer border ">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <h3>How it works </h3>
                <p>
             <p>1. We take Question as input by Quiz Creater <br />
             2. We Provide a unique Quiz id to creater <br />
             3. With that Quizid student can attend Quiz and evulate themselves 

             </p>

                
                </p>
              </div>
              <div className="col ">
                <div className="mx-2">
                  <h3>Contact us </h3>
                </div>
                <p className="my-3">
                  Quzzy01456@gmail.com
                <br />
                +91 789801XXXX </p>
                <ul className="">
               
                    <a className=""
                      href="https://www.facebook.com/profile.php?id=100085039485933"
                      target="blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <FacebookIcon></FacebookIcon>
                    </a>
               
                
                    <a className="mx-2"
                      href="https://www.instagram.com/prabhat.net267?r=nametag"
                      target="blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <InstagramIcon></InstagramIcon>
                    </a>
          
             
                    <a className="mx-2"
                      href="https://www.linkedin.com/in/alok-chaturvedi-5a9a73187"
                      target="blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <LinkedInIcon></LinkedInIcon>
                    </a>
              
                </ul>
              </div>
              <div class="col">
             <h3>Creaters </h3>
             <br />
             <p>Alok Kumar Chaturvedi <br />
             Pooja Patil <br />
             Kishor Kumar </p>
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
