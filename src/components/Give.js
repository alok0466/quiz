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
        // we set that quiz id for Quizid

        let Quizid = localStorage.getItem("QuizId");
        Quizid = JSON.parse(Quizid);
        Quizid = quiz[0];
        localStorage.setItem("QuizId", JSON.stringify(Quizid));
        setTitle(quiz[1]);
        setTest(false);

        // Here We Manupulate By Using Div

        break;
      } else if (i == content.length - 1) {
        // alert("wrong quiz id ");
        setTest(true);
        alert("Entered Quiz Id is Incorrect")
      }
    }
  };

  // here i'm going to creat states for data handling

  const [Test, setTest] = useState(true);
  const [Title, setTitle] = useState(undefined);

  return (
    <div>
      {/* <div className="container my-3">
        <h3>Enter Quiz id here </h3>
        <input id="inptxt" type="text" />
        <br />
        <button className="btn btn-success my-2" onClick={check}>
          Submit
        </button> */}

      <div className="alert">
        <div class="alert alert-info bg-success" role="alert">
          <h5> Quiz id - {}</h5>
          <p className="text-light">
            Remember Your Quiz id for furthere refrence and find your quiz in
            searchbox{" "}
          </p>
        </div>
      </div>
      {Test ? (
        <div class="col-lg-6 mb-4 mx-auto my-3 ">
          <div class="card">
            <img class="card-img-top" src="" alt="" />

            <div class="card-body">
              <h5 class="card-title">Enter Quiz Id</h5>
              <input
                id="inptxt"
                className="form-control text-primary fw-bold"
                type="text"
                placeholder=""
                aria-label="default input example"
              />

              <button className="btn btn-success my-2" onClick={check}>
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        // <div>
        //   <h2> {"this is correct"}</h2>
        //   <h3> {Title}</h3>
        //   <Link to="/LoadQuestion">
        //     <button className="btn btn-primary"> Start Test </button>
        //   </Link>
        // </div>

        <div class="col-lg-6 mb-4 mx-auto my-3 ">
          <div class="card">
            <img class="card-img-top" src="" alt="" />

            <div class="card-body">
              <h5 class="card-title">You Have Entered Correct id </h5>
              <h3>Quiz Title - {Title}</h3>

              <Link to="/LoadQuestion">
                <button className="btn btn-primary"> Next </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <br /><br />
    </div>
  );
}
