import React, { createRef, useState } from "react";
// import { json, Link } from "react-router-dom";
import "./Addquestion.css";
import { Link } from "react-router-dom";
export default function Addquestion() {
  // here we copy quiz id

  function copyid() {
    navigator.clipboard.writeText(alok);
    alert(" QuizId has been copied to clipboard");
  }

  let onchangeQuestion = (event) => {
    setquestion(event.target.value);
  };

  let onchangeA = (event) => {
    setoptionA(event.target.value);
  };

  let onchangeB = (event) => {
    setoptionB(event.target.value);
  };

  let onchangeC = (event) => {
    setoptionC(event.target.value);
  };

  let onchangeD = (event) => {
    setoptionD(event.target.value);
  };

  const [question, setquestion] = useState();

  const [optionA, setoptionA] = useState();
  const [optionB, setoptionB] = useState();
  const [optionC, setoptionC] = useState();
  const [optionD, setoptionD] = useState();

  const [alok, setalok] = useState(localStorage.getItem("QuizId"));

  // HERE WE CREAT OBJECT AND SET INTO LOCALSTORAGE THOSE QUESTIONS

  function addquestion(event) {
    if (question == null) {
      alert("Input field  should not be empty ");
    } else if (optionA == null) {
      alert("Input field  should not be empty ");
    } else if (optionB == null) {
      alert("Input field  should not be empty ");
    } else if (optionC == null) {
      alert("Input field  should not be empty ");
    } else if (optionD == null) {
      alert("Input field  should not be empty ");
    } else {
      event.preventDefault();
      // now we creat object of question and option

      let questionx = {
        Question: question,
        OptionA: optionA,
        OptionB: optionB,
        OptionC: optionC,
        OptionD: optionD,
      };

      // here we creat Quizarray

      // here we call random function to collect an random id for quiz id

      let quizid = localStorage.getItem("QuizId");
      let details = localStorage.getItem("Quizes");
      details = JSON.parse(details);
      for (let i = 0; i < details.length; i++) {
        let target = details[i];
        let check = target[0];
        check = String(check);

        if (check == quizid) {
          target[2].push(questionx);
          localStorage.setItem("Quizes", JSON.stringify(details));
        }
      }
      // show alert that question added success fully

      alert(" Question Added Successfully ");

      // here we are going to clear input field from here

      let OptionA = document.getElementById("A");
      OptionA.value = " ";

      let OptionB = document.getElementById("B");
      OptionB.value = " ";

      let OptionC = document.getElementById("C");
      OptionC.value = " ";

      let OptionD = document.getElementById("D");
      OptionD.value = " ";

      let questionN = document.getElementById("exampleFormControlTextarea1");
      questionN.value = " ";
    }
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>,</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossOrigin="anonymous"
      />

      <div className="container" id="creatQuizUi">
        <br />
        <div className="alert">
          <div class="alert alert-success" role="alert">
            <h5> Quiz id - {alok}</h5>
            <p>
              Remember Your Quiz id for furthere refrence and find your quiz in
              searchbox{" "}
            </p>
            <a id="copyid" onClick={copyid}>
              <b> Click here to copy Quiz id </b>{" "}
            </a>
          </div>
        </div>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b>Question : -</b>
        </label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={2}
          onChange={onchangeQuestion}
          defaultValue={""}
        />

        <br />
        <b></b>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b> Option - A</b>
        </label>

        <input
          className="form-control form-control-sm"
          type="text"
          id="A"
          onChange={onchangeA}
          placeholder=""
          aria-label=".form-control-sm example"
        />

        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b> Option - B</b>
        </label>

        <input
          className="form-control form-control-sm"
          id="B"
          type="text"
          onChange={onchangeB}
          placeholder=""
          aria-label=".form-control-sm example"
        />

        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b> Option - C</b>
        </label>

        <input
          className="form-control form-control-sm"
          type="text"
          id="C"
          onChange={onchangeC}
          placeholder=""
          aria-label=".form-control-sm example"
        />

        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b> Option - D</b>
        </label>

        <input
          className="form-control form-control-sm"
          type="text"
          id="D"
          onChange={onchangeD}
          placeholder=""
          aria-label=".form-control-sm example"
        />

        <br />
        <button className="btn btn-primary" onClick={addquestion}>
          {" "}
          Add Question
        </button>
      
       <Link to="/Preview">Preview</Link>

        <button className="btn btn-primary mx-2"> Finish </button>
      </div>
    </>
  );
}
