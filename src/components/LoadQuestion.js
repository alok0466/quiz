// import React from "react";
// import { json, Link } from "react-router-dom";
// export default function LoadQuestion() {
//   function LoadTest() {

//     // Here we set localstorage Result == 0 
//     localStorage.setItem = ("Result",JSON.stringify(0))

//     // Here we access data from localstorage 
    
//     let Bigdata = localStorage.getItem("Quizes");
//     Bigdata = JSON.parse(Bigdata);
//     let QuizId = localStorage.getItem("QuizId");
//     QuizId = JSON.parse(QuizId);

//     for (let i = 0; i < Bigdata.length; i++) {
//       let check = Bigdata[i];
//       console.log(check);
//       check = JSON.stringify(check)
//       if (check[0] == QuizId) {
//         localStorage.setItem("CurrentQuiz", check);

//         // Here we are going to set question count key value pair in localstorage 

//         localStorage.setItem("count",JSON.stringify(1));

//       }
//     }
//   }

//   return (
//     <>
//       <h3 className="text-center text-danger my-2">
//         *** Welcome To This Test Page ***{" "}
//       </h3>
//       <div className="container">
//         <h5>Insturctions - </h5>
//         <p className="text-info">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
//           molestiae asperiores nobis consequuntur iste, facilis assumenda
//           distinctio earum amet cum natus iure culpa, ab deserunt similique
//           repellendus impedit non incidunt laboriosam maiores perspiciatis velit
//           obcaecati? Quidem quo adipisci sint aut.
//         </p>

//         <Link to="/LoadTest">
//           <button className="btn btn-success container" onClick={LoadTest}>
//             Start Test{" "}
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// }
