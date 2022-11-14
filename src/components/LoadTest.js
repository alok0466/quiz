import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function LoadTest() {
  let NextQuestionfrist = () => {
    console.log("alok is don ");
    setTest(true);
    let Count = localStorage.getItem("Count");
    Count = JSON.parse(Count);
    setQuestionCount(Count + 1);

    let mca = localStorage.getItem("CurrentQuiz");
    let data = mca;
    data = JSON.parse(data);
    setTotalQuestion(data.length);
    if (Count < data.length) {
      const currentQuestion = data[Count];

      setquestion(currentQuestion.Question);
      setoptionB(currentQuestion.OptionB);
      setoptionC(currentQuestion.OptionC);
      setoptionA(currentQuestion.OptionA);
      setoptionD(currentQuestion.OptionD);
      setCorrectAms(currentQuestion.Answer);

      // here we call a function to update count

      Count = Count + 1;
      localStorage.setItem("Count", JSON.stringify(Count));
    } else if (QuestionCount == TotalQuestion) {
      alert("You Have done ");
    }

    // // Here we check that answer is correct or not

    // let A = document.getElementById("exampleRadios1");
    // let B = document.getElementById("exampleRadios2");
    // let C = document.getElementById("exampleRadios3");
    // let D = document.getElementById("exampleRadios4");

    // let correctAnswer = 0; // here we store the value of checked radio button
    // // here we will store the value and should be happebn and done with the dependenceia to do that value
    // if (A.checked) {
    //   correctAnswer = A.value;
    // } else if (B.checked) {
    //   correctAnswer = B.value;
    // } else if (C.checked) {
    //   correctAnswer = C.value;
    // } else if (D.checked) {
    //   correctAnswer = D.value;
    // }

    // // here we update result

    // let result = localStorage.getItem("result");
    // result = JSON.parse(result);
    // if (correctAnswer == CorrectAns) {
    //   result += 1;
    //   localStorage.setItem("result", JSON.stringify(result));
    // }
  };

  let NextQuestion = () => {
    let Count = localStorage.getItem("Count");
    Count = JSON.parse(Count);
    setQuestionCount(Count + 1);

    let mca = localStorage.getItem("CurrentQuiz");
    let data = mca;
    data = JSON.parse(data);
    setTotalQuestion(data.length);
    if (Count < data.length) {
      const currentQuestion = data[Count];

      setquestion(currentQuestion.Question);
      setoptionB(currentQuestion.OptionB);
      setoptionC(currentQuestion.OptionC);
      setoptionA(currentQuestion.OptionA);
      setoptionD(currentQuestion.OptionD);
      setCorrectAms(currentQuestion.Answer);

      // here we call a function to update count

      Count = Count + 1;
      localStorage.setItem("Count", JSON.stringify(Count));
    } else if (QuestionCount == TotalQuestion) {
      alert("You Have done ");
      setcheck(true);
    }

    // // Here we check that answer is correct or not

    let A = document.getElementById("exampleRadios1");
    let B = document.getElementById("exampleRadios2");
    let C = document.getElementById("exampleRadios3");
    let D = document.getElementById("exampleRadios4");

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

    // here we update result

    let result = localStorage.getItem("Result");
    result = JSON.parse(result);
    if (correctAnswer == CorrectAns) {
      result += 1;
      localStorage.setItem("Result", JSON.stringify(result));
    }
  };

  
  const [Title, setTitle] = useState();
  const [Test, setTest] = useState(false);
  const [QuestionCount, setQuestionCount] = useState();
  const [TotalQuestion, setTotalQuestion] = useState();
  const [question, setquestion] = useState();
  const [optionA, setoptionA] = useState();
  const [optionB, setoptionB] = useState();
  const [optionC, setoptionC] = useState();
  const [optionD, setoptionD] = useState();
  const [CorrectAns, setCorrectAms] = useState();
  const [check, setcheck] = useState(false);
  // const [TotalQuestion, setTotalQuestion] = useState();

  function FinishTest() {
    let x = localStorage.getItem("Result");
    let percentage = (x * 100) / TotalQuestion;
    alert("you have done your test " + "Your Result is " + percentage + "%");
  }
  return (
    <div>
      {Test ? (
        <div>
          <div className="border container my-2">
            <div></div>
            <h1 className="text-center">{Title} </h1>
            <div className="container mx-5">
              <h3>{"Question No -" + QuestionCount + " / " + TotalQuestion}</h3>
              <p>
                <b>{question}</b>
              </p>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  {optionA}
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="2"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  {optionB}
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="3"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  {optionC}
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios4"
                  value="4"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  {optionD}
                </label>
              </div>
              <br />
            </div>
            {/* {check ? <div></div> : <div></div>} */}
            <div className="test text-center ">
              {check ? 
              (<div>
                <Link to="/Result">
                 <button
                className="btn btn-primary mx-3 my-3 "
                onClick={FinishTest}
              >
                Finish Test{" "}
              </button>
              </Link>
              </div>) :
              ( <div>
              <button
                className="btn btn-primary mx-3 my-3 "
                onClick={NextQuestion}
              >
                Next Question{" "}
              </button>
              </div>) }

              {/* <button
                className="btn btn-success mx-3 my-3 "
                onClick={FinishTest}
              >
                Finish Test{" "}
              </button> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="inst border text-center  ">
          <h3> Instructions :-</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            soluta eveniet enim? Impedit, expedita delectus laboriosam
            consequuntur molestiae voluptate, maiores architecto, ipsum aut
            accusantium minus voluptatibus repellendus. Dolorem, illo
            consequuntur.
          </p>
          <button
            className="btn btn-info mx-2 my--2"
            onClick={NextQuestionfrist}
          >
            Start Test
          </button>
          <br />
        </div>
      )}
    </div>
  );
}
