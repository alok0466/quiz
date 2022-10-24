import React, { useState } from "react";

export default function LoadTest() {
  // Here is NextQuestion function

  let NextQuestion = () => {
    setTest(true);
    let Count = localStorage.getItem("count");
    Count = JSON.parse(Count);
    setQuestionCount(Count);

    let data = localStorage.getItem("CurrentQuiz");
    data = JSON.parse(data);
    let quiz = data[2];
    console.log(quiz);
    setTotalQuestion(quiz.length);
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
    } else if (QuestionCount == TotalQuestion - 1) {
      alert("You Have done ");
    }

    // Here we check that answer is correct or not 


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

  function FinishTest() {
    alert("you have done your test ");
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
                  id="exampleRadios2"
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
                  id="exampleRadios3"
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
                  id="exampleRadios4"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  {optionD}
                </label>
              </div>
              <br />
            </div>

            <div className="test text-center ">
              <button
                className="btn btn-primary mx-3 my-3 "
                onClick={NextQuestion}
              >
                Next Question{" "}
              </button>

              <button
                className="btn btn-success mx-3 my-3 "
                onClick={FinishTest}
              >
                Finish Test{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="inst border text-center  ">
          <h3>Instructions :-</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            soluta eveniet enim? Impedit, expedita delectus laboriosam
            consequuntur molestiae voluptate, maiores architecto, ipsum aut
            accusantium minus voluptatibus repellendus. Dolorem, illo
            consequuntur.
          </p>
          <button className="btn btn-info mx-2 my--2" onClick={NextQuestion}>
            Start Test
          </button>
          <br />
        </div>
      )}
    </div>
  );
}
