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


    let title = Title;

    let QuizId = random();
  

    let id = localStorage.getItem("QuizId");
    if (id == null) {
      localStorage.setItem("QuizId", JSON.stringify(QuizId));
    } else {
      id = JSON.parse(id);
      id = QuizId;
      localStorage.setItem("QuizId", JSON.stringify(id));
    }
    

    let details = localStorage.getItem("Quizes");
    let questionarray = [];
   

    if (details == null) {
      let mainarray = [];
      localStorage.setItem("Quizes", JSON.stringify(mainarray));
    } else {
 
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

        <Link to="/Addquestion">
          <button onClick={AddTitle} className=" btn btn-success">
            {" "}
            Add Title{" "}
          </button>
        </Link>

        <div>
          <br />
          <h3>Preview</h3>
          <p>{Title}</p>
        </div>
      </div>
    </>
  );
}
