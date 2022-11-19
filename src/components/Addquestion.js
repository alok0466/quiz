import React, { createRef, useState } from "react";
import "./Addquestion.css";
import { Link } from "react-router-dom";
export default function Addquestion() {
  // Here we copy quizid
  function copyid() {
    navigator.clipboard.writeText(quizId);
    alert(" QuizId has been copied to clipboard");
  }

  // here we fire OnChange event to fecth input value

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

  // here we creat states to handle input data
  const [quizId, setquizid] = useState(localStorage.getItem("QuizId"));
  const [question, setquestion] = useState();
  const [ optionA , setoptionA] = useState()
  const [optionB,setoptionB] = useState();
  const [ optionC , setoptionC] = useState()
  const [optionD,setoptionD] = useState();
  const[CorrectAns,setCorrectAns] = useState();

  // const [alok, setalok] = useState(localStorage.getItem("QuizId"));

  // HERE WE CREAT OBJECT AND SET INTO LOCALSTORAGE THOSE QUESTion 
  // if we discuss about localstorage than we can difine as normal storage and should be 
  // declear as the main host as database 

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
      // Here we are going to take value of checked rario button as correct Answer

      let A = document.getElementById("inlineRadio1");
      let B = document.getElementById("inlineRadio2");
      let C = document.getElementById("inlineRadio3");
      let D = document.getElementById("inlineRadio4");

      let correctAnswer = 0; // here we store the value of checked radio button
      // here we will store the value and should be happebn and done with the dependenceia to do that value
      if (A.checked) {
        correctAnswer = A.value;
      } else if (B.checked) {
        correctAnswer = B.value;
      } else if (C.checked) {
        correctAnswer = C.value;
      } else if (D.checked) {
        correctAnswer = D.value;
      }
      setCorrectAns(correctAnswer);

      let QuestionCount;
      // now we creat object of question and option

      let questionx = {
        Question: question,
        OptionA: optionA,
        OptionB: optionB,
        OptionC: optionC,
        OptionD: optionD,
        Answer: correctAnswer,
      };

      // now we are going to fetch quiz id and quiz array to add question and option on that array

      let quizid = localStorage.getItem("QuizId");
      let details = localStorage.getItem("Quizes"); // here we pull all data of all quizzes in details var.
      details = JSON.parse(details);

      // now we target specific index of array where is quiz title

      for (let i = 0; i < details.length; i++) {
        let target = details[i];
        let check = target[0];
        check = String(check);

        if (check == quizid) {
          // if check == quizid it means we found that array
          target[2].push(questionx); // here we push quistionx object

          // now we update that specific array in localstorage
          localStorage.setItem("Quizes", JSON.stringify(details));

          // now we count the question

          QuestionCount = target[2].length;
        }
      }

      // show alert that question added success fully

      alert("Question No- " + QuestionCount + " Added Successfully");

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

  // here is finish function to finish to add question

  let finish = () => {
    alert("You Have Successfully Created Test");
  };

  return (
    <div className="main">
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
            <h5> Quiz id - {quizId}</h5>
            <p>
              Remember Your Quiz id for furthere refrence and find your quiz in
              searchbox{" "}
            </p>
            <a id="copyid" onClick={copyid}>
              <b> Click here to copy Quiz id </b>{" "}
            </a>
          </div>
        </div>

        <div className="border-2 container
         question">
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

          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <b> Option - A</b>
          </label>

          <input
            className="form-control form-control-sm "
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
            className="form-control form-control-sm "
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
        </div>
        <div className="text-center">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label my-3"
          >
            <b> Sellect Correct Answer </b>
          </label>
          <br />
          <div className="form-check form-check-inline ">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              defaultValue="1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Option - A
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              defaultValue="2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Option - B
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              defaultValue="3"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Option - C
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              defaultValue="4"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Option - D
            </label>
          </div>
          <br />
        </div>



        <br />
        <div className="text-center">
          <button className="btn btn-primary" onClick={addquestion}>
            {" "}
            Add Question
          </button>

          <Link to="/Preview">
            <button className="btn btn-primary mx-2">Preview</button>
          </Link>

          <Link to="/">
            <button className="btn btn-primary mx-2" onClick={finish}>
              Finish
            </button>
          </Link>

        </div>
        <br /><br /><br /><br /><br />

      </div>
    </div>
  );
}
