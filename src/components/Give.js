import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Give() {
  let main = () => alert("main is running");
  // here is check function who checks that given quiz id is correct or not

  let check = () => {
    let title;
    let id = document.getElementById("inptxt").value;
    let content = localStorage.getItem("Quizes");
    content = JSON.parse(content);
    // console.log(content)

    for (let i = 0; i < content.length; i++) {
      let quiz = content[i];

      if (quiz[0] == id) {
        console.log(quiz);
        // we set that quiz id for Quizid 

        let Quizid = localStorage.getItem("QuizId")
        Quizid = JSON.parse(Quizid)
        console.log(Quizid)
        Quizid = quiz[0]
        localStorage.setItem("QuizId",JSON.stringify(Quizid))
        setTitle(quiz[1]);
        setTest(true);

        // Here We Manupulate By Using Div

 
    ;
        break;
      } else if (i == content.length - 1) {
        // alert("wrong quiz id ");
        setTest(false);
      }
    }
  };

  // here i'm going to creat states for data handling

  const [Test, setTest] = useState(undefined);
  const [Title, setTitle] = useState(undefined);

  return (
    <>
      <div className="container my-3">
        <h3>Enter Quiz id here </h3>
        <input id="inptxt" type="text" />
        <br />
        <button className="btn btn-success my-2" onClick={check}>
          Submit
        </button>

        {Test ? (
          <div>
            <h2> {"this is correct"}</h2>
            <h3> {Title}</h3>
            <Link to="/LoadQuestion">
            <button className="btn btn-primary"> Start Test </button>
            </Link>
          </div>
        ) : (
          <h2> {"  "}</h2>
        )}
      </div>
    </>
  );
}
