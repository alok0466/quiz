import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Preview() {
  // here we are going to fetch quiz by localStorage

  let showQuiz = () => {
    let val = localStorage.getItem("Quizes");
    let id = localStorage.getItem("QuizId");
    val = JSON.parse(val);
    id = JSON.parse(id);
    console.log(val);
    console.log(id);

    let quizid;
    let quiztitle;
    let quizz;

    for (let i = 0; i < val.length; i++) {
      let check = val[i];
      console.log(check[0]);
      // console.log(id)

      if (check[0] == id) {
        quizid = check[0];
        quiztitle = check[1];
        quizz = check[2];

        break;
      }
    }
    console.log(quizz);
    console.log(quizid);

    console.log(quiztitle);

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
      let Ans = currentItem.Answer;

      alok += `
                 

      <div className="container">
    
      <br />
      <p>
        <b>
          
         Question ${x + 1}
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

          <h6> Correct Answer - ${Ans} </h6>
        </div>

      
      </div>
    </div>
    
    
      `;

      setQuestionCount(x + 1);
    }
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

  // here is finish function to finish to add question

  let finish = () => {
    alert("You Have Successfully Created Test");
  };

  return (
    <div>
      <div >
      
      </div>

      <div className="ShowQuiz">
        <h5 className="text-center"> Quiz Title - {title}</h5>
        <p className="quizid text-center">
          <b> Quiz id - {qid}</b>
        </p>
        <div id="preview" className="container"></div>
        <div className="text-center buttons">
        <button className="btn btn-success my-3" onClick={showQuiz}>
          Show Quiz
        </button>
          <Link to="/Addquestion">
            <button className="btn btn-primary mx-2">Add more Question </button>
          </Link>

          <Link to="/">
            <button className="btn btn-primary mx-2" onClick={finish}>
              Finish Test
            </button>
          </Link>
        </div>
        <br />
        <br /> <br />
        <br /> <br />
        <br /> <br />
        <br />
      </div>
    </div>
  );
}
