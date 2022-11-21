import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Box";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import ViewStreamIcon from '@mui/icons-material/ViewStream';
const color = red[500];

// import './Body.css';
export default function Body() {
  return (
    <div id="main">
      <img
        src="C:\Users\sc\Desktop\ak.net\React learning\quizapp\my-app\src\components\main.webp"
        alt=""
      />
      <br />
      <div className="container text-dark" id="fghj">
        <h1 id="fristHeading" className="text-dark">
          Here You Go To Create a Quiz ...........
        </h1>
        <br />
        <p>
           Please click on the button below to create a quiz.
        </p>
        <br />
      </div>

      <div className="flex-container">
        <div className="flex-item" id="flex1">
          <img src="asdfasdf.png" alt="" />
        </div>

        <div className="flex-item" id="flex2">
          <div className="backgroundimg">
            <br /> <br />
          </div>
          <div className="button-container">
            <div className="createBtn">
              <div id="Btn">
                <button id="BtnQuiz">
                  <AddIcon id="PlusIcon" style={{ color: "white" }}>
                    {" "}
                  </AddIcon>
                  <Link
                    id="GiveBtn"
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Creat"
                  >
                    <b>Create Quiz</b>{" "}
                  </Link>
                </button>
                <button id="BtnQuizgive">

                <ViewStreamIcon id="solveicon"></ViewStreamIcon>
                  <Link
                    id="GiveBtn"
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Give"
                  >
                   <b> Solve Quiz{" "}</b>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
       
        </div>
      </div>
    <div>
    <br />
          <br />
          <br />
          <br />
          <br />
      
    </div>
    </div>
    
  );
}
