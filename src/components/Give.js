import React from "react";

export default function Give() {
  let check = () => {
    console.log("im a good boy ")
    let id = document.getElementById("inptxt").value;
    let content = localStorage.getItem("Quizes");
    content = JSON.parse(content);
    console.log(content)

    for (let i = 0; i < content.length; i++) {
      let quiz = content[i];
      console.log(quiz)
      if (quiz[0] == id) {
        alert("alok is good boy ")
        let title = quiz[1]
           
      }
      if (i == content.length - 1) {
        alert("wrong quiz id ");
      }
    }
  };

  return (
    <div className="container my-3">
      <h3>Enter Quiz id here </h3>
      <input id="inptxt" type="text" />
      <br />
      <button className="btn btn-success my-2" onClick={check}>
        Submit
      </button>
    </div>
  );
}
