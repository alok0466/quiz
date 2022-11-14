import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Give() {
 
  // here is check function who checks that given quiz id is correct or not

  let check = () => {
    let id = document.getElementById("inptxt").value;
    let content = localStorage.getItem("Quizes");
    content = JSON.parse(content);


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

        // Here We set current quiz , count , and result key in localstorage 
        let currentquiz = quiz[2]
        localStorage.setItem("CurrentQuiz",JSON.stringify(currentquiz))
        localStorage.setItem("Count",0)
        localStorage.setItem("Result",0)



        break;
      } else if (i == content.length - 1) {
 
        setTest(true);
        alert("Entered Quiz Id is Incorrect")
      }
    }

  


  


  };




  // 

  // here i'm going to creat states for data handling

  const [Test, setTest] = useState(true);
  const [Title, setTitle] = useState(undefined);


  return (
    <div>
    

      {/* <div className="alert">
        <div class="alert alert-info bg-success" role="alert">
          <h5> Quiz id - {}</h5>
          <p className="text-light">
            Remember Your Quiz id for furthere refrence and find your quiz in
            searchbox{" "}
          </p>
        </div>
      </div> */}
      {Test ? (
        <div className="col-lg-6 mb-4 mx-auto my-3 ">
          <div className="card">
            <img className="card-img-top" src="" alt="" />

            <div className="card-body">
              <h5 className="card-title">Enter Quiz Id</h5>
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


        <div className="col-lg-6 mb-4 mx-auto my-3 ">
          <div class="card">
            <img className="card-img-top" src="" alt="" />

            <div className="card-body">
              <div className="text-center">
              <h5 className="card-title ">Welcome To This Quiz </h5>
              <h4>Quiz Title - {Title}</h4>
              </div>
            
<br />
              <Link to="/LoadTest">
                <button className="btn btn-primary btn-sm container"
                // onClick={SetValue}
                > Next </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <br /><br />
    </div>
  );
}
