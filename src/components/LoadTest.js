import React, { useState } from "react";

export default function LoadTest() {
  const [Condition, setCondition] = useState();

  let LoadQuestion = () => {
    let main = document.getElementById("main");
    // main.remove();
    setCondition(true);
  };

  // Here is NextQuestion function

  let NextQuestion = () => {
    let Count = localStorage.getItem("count");
    Count = JSON.parse(Count);
    setQuestionCount(Count);
    console.log(QuestionCount);

    let data = localStorage.getItem("CurrentQuiz");
    data = JSON.parse(data);
    let quiz = data[2];
    setTotalQuestion(quiz.length);
    console.log(TotalQuestion)
    if (Count < quiz.length + 1) {
      let i = 0;
      while (i < quiz.length) {
        const currentQuestion = quiz[Count];
        //   console.log(quiz[i])
        setquestion(currentQuestion.Question);
        setoptionB(currentQuestion.OptionB);
        setoptionC(currentQuestion.OptionC);
        setoptionA(currentQuestion.OptionA);
        setoptionD(currentQuestion.OptionD);
        i += 1;
      }

      Count = Count + 1;
      localStorage.setItem("count", JSON.stringify(Count));
    }
     else if ( QuestionCount == TotalQuestion-1)
     {
      alert("You Have done ");
    }
  };
  const [QuestionCount, setQuestionCount] = useState();
  const [TotalQuestion, setTotalQuestion] = useState();
  const [question, setquestion] = useState();
  const [optionA, setoptionA] = useState();
  const [optionB, setoptionB] = useState();
  const [optionC, setoptionC] = useState();
  const [optionD, setoptionD] = useState();

  function FinishTest() 
  {
 alert("you have done your test ")
  }
  return (
    <>
      <div id="main">
        <div className="container my-3" id="">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            {" "}
            <b>Enter Your Name -</b>{" "}
          </label>
          <input type="text" className="container" />
        </div>
        <div className="col-md-12 text-center">
          <button className="btn btn-info text-center" onClick={LoadQuestion}>
            Start Answering
          </button>
        </div>
      </div>

      <br />
      <div className="border container my-2">
        <div></div>
        <h1 className="text-center">Test Title </h1>
        <div className="container mx-5">
          <h3>
            {"Question No -" + (QuestionCount) + " / " + TotalQuestion}
          </h3>
          <p>
            <b>{question}</b>
          </p>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
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
              id="exampleRadios1"
              value="option1"
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
              id="exampleRadios1"
              value="option1"
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
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              {optionD}
            </label>
          </div>
          <br />
        </div>
      </div>

      <div className="test text-center ">
        <button className="btn btn-primary mx-3 my-3 " onClick={NextQuestion}>
          Next Question{" "}
        </button>

        <button className="btn btn-success mx-3 my-3 " onClick={FinishTest}>
          Finish Test{" "}
        </button>
      </div>
      <br />
    </>
  );
}
