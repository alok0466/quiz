import React from "react";
import { useState } from "react";
export default function Preview() {
  // here we are going to fetch quiz by localStorage

  let showQuiz = () => {
    let val = localStorage.getItem("Quizes");
    val = JSON.parse(val);
    let id = localStorage.getItem("QuizId");
    console.log(val);
    let quizid;
    let quiztitle;
    let quizz;

    for (let i = 0; i < val.length; i++) {
      let check = val[i];
      if (check[0] == id) {
        console.log(check);

        quizid = check[0];
        quiztitle = check[1];
        quizz = check[2];

        break;
      }
    }
    console.log(quizz);
    let alok = "";
    let QuestionCount;

    for (let x = 0; x < quizz.length; x++) {
      let currentItem = quizz[x];
      let currentQuestion = currentItem.Question;
      console.log(currentQuestion);
      let optionA = currentItem.OptionA;
      let optionB = currentItem.OptionB;
      let optionC = currentItem.OptionC;
      let optionD = currentItem.OptionD;

      alok += `
                 

      <div className="container">
      <h1 className="text-center">
   ${quiztitle}
      </h1>
      <br />
      <p>
        <b>
          
         Question ${x+1}
           - ${currentQuestion}
        </b>
      </p>
      <div className="container">
        <div className="">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
          ${optionA}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
          ${optionB}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
          ${optionC}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
          ${optionD}
          </label>
        </div>

      
      </div>
    </div>
    
    
      `;
      setQuestionCount(x + 1);
    }
    console.log(alok);
    let main = document.getElementById("preview");
    main.innerHTML = alok;
    setcontent(alok);
    setqid(quizid);
    settitle(quiztitle);
  };

  const [content, setcontent] = useState();
  const [title, settitle] = useState();
  const [qid, setqid] = useState();
  const [QuestionCount, setQuestionCount] = useState();
  return (
    <div>
      <button className="btn btn-success my-3" onClick={showQuiz}>
        Show Quiz
      </button>
      <p className="quizid">{qid}</p>
    
      <div id="preview"></div>
    </div>
  );
}
