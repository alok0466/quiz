import { warning } from "@remix-run/router";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function X() {
  function random() {
    let randomval = Math.floor(Math.random() * 100000000 + 1);
    return randomval;
  }

  function TitleName(event) {
    setTitle(event.target.value);
  }

  function AddTitle() {
console.log(" name is don ")
   
      let title = Title;

      let QuizId = random();
    console.log(QuizId);
      console.log(" name is don ")

      let id = localStorage.getItem("QuizId");
      if (id == null) {
        localStorage.setItem("QuizId", JSON.stringify(QuizId));
        console.log(" name is don ")

      } else {
        console.log(" name is don ")

        id = JSON.parse(id);
        id = QuizId;
        localStorage.setItem("QuizId", JSON.stringify(id));
        console.log(" name is don ")

      }
      console.log(" name is don ")

      let details = localStorage.getItem("Quizes");
      let questionarray = [];
      console.log(" name is don ")

      if (details == null) {
        console.log(" name is don ")
        let mainarray = [];
        localStorage.setItem("Quizes", JSON.stringify(mainarray));
      } else {
        console.log(" name is don ")

        details = JSON.parse(details);
        let subQuiz = [QuizId, title, questionarray];
        details.push(subQuiz);
        localStorage.setItem("Quizes", JSON.stringify(details));
      }

      alert("Quiz Title Added Successfully");
    
  }

  const [Title, setTitle] = useState();

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossOrigin="anonymous"
      />

      {/* here i am going to creat ui for creat Quiz  */}

      <div className="container" id="creatQuizUi">
        <br />
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h4> Quiz / Test Title </h4>
        </label>

        <input
          className="form-control form-control-sm"
          type="text"
          onChange={TitleName}
          placeholder=""
          aria-label=".form-control-sm example"
        />

        <br />
        <button id="creat quiz ">
       

       <Link
            to="/Addquestion"
            className="btn btn-primary container"
            aria-current="page"
            onClick={AddTitle}
       
            >
               Creat Quiz
            </Link>

  
        </button>

     

        <div className="Preview">
          <h3>Preview</h3>
          <p>{Title}</p>
        </div>
      </div>
    </>
  );
}
