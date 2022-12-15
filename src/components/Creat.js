import { warning } from "@remix-run/router";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Create.css"
export default function X() {
  function random() {
    let randomval = Math.floor(Math.random() * 100000000 + 1);
    return randomval;
  }

  function TitleName(event) {
    setTitle(event.target.value);
    setTest(false);
  }

  function AddTitle() {
    if (Title == undefined) {
      alert(" Test must Have is's title so Enter Test Title ");
    } else {
      let title = Title;

      let QuizId = (random() + random()) - random();

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
  }

  const [Title, setTitle] = useState();
  const [Test, setTest] = useState(true);

  return (
    <>
    

      <div className="contai">
        <div className="boxc">
          <input
          onChange={TitleName}
            type="text"
            id="input"
            placeholder="Enter Quiz Title Here ....">

          </input>
        </div>
      </div>


      <br />
      {Test ? (
        <div >
          <button onClick={AddTitle} className="addBtn">

            Add Title
          </button>
        </div>
      ) : (
        <div className="border">
          <Link to="/Addquestion">
            <button onClick={AddTitle} className="Btnmain">

              Add Title
            </button>
          </Link>
        </div>
      )}

      <div>
        <br />
     
        <p>{Title}</p>
      </div>
      <br /><br /><br /><br /><br />

    </>
  );
}
