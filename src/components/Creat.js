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
    setTest(false);
  }

  function AddTitle() {
    if (Title == undefined) {
      alert("Input Field should not be empty .........");
    } else {
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
  }

  const [Title, setTitle] = useState();
  const [Test, setTest] = useState(true);

  return (
    <>
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
        {Test ? (
          <div>
            <button onClick={AddTitle} className=" btn btn-success">
              {" "}
              Add Title{" "}
            </button>
          </div>
        ) : (
          <div>
            <Link to="/Addquestion">
              <button onClick={AddTitle} className=" btn btn-success">
                {" "}
                Add Title{" "}
              </button>
            </Link>
          </div>
        )}

        <div>
          <br />
          <h3>Preview</h3>
          <p>{Title}</p>
        </div>
      </div>
    </>
  );
}
