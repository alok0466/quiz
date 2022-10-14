import React from "react";
import { useState } from "react";
export default function Preview() {
  let showQuiz = () => {
    let val = localStorage.getItem("Quizes");
    val = JSON.parse(val);
    let id = localStorage.getItem("QuizId");

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

    let alok ; 

    for ( let x = 0 ; x<quizz.length; x++)
    {
      let currentItem = quizz[x]
      let currentQuestion = currentItem.Question;
      let optionA = currentItem.OptionA
      let optionB = currentItem.OptionB
      let optionC = currentItem.OptionC
      let optionD = currentItem.OptionD

      alok+= `
        ${currentQuestion} 
      <br>
  
       ${optionA}
  ${optionB}
    ${optionC}
     ${optionD}

      `
    }

 
    setcontent(alok);
    setqid(quizid);
    settitle(quiztitle);
  };

  const [content, setcontent] = useState();
  const [title, settitle] = useState();
  const [qid, setqid] = useState();
  return (
    <div>
      <button className="btn btn-success my-3" onClick={showQuiz}>
        Show Quiz
      </button>
      <p className="quizid">{qid}</p>
      <h1 id="QuizTitle">{title}</h1>
      <h3 id="question">
        {" "}
        Q{}- {content}{" "}
      </h3>
    </div>
  );
}
