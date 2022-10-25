import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Box";
import { red } from "@mui/material/colors";
const color = red[500];

// import './Body.css';
export default function Body() {
  return (
    <div id="main">
      <img
        src="C:\Users\sc\Desktop\ak.net\React learning\quizapp\my-app\src\components\main.webp"
        alt=""
      />
      <br />
      <div className="container" id="fghj">
        <h1 id="fristHeading" className="text-dark">
          Here You Go To Create a Quiz ...........
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus enim totam non, nostrum sunt illo libero incidunt?
          Commodi rerum, quidem pariatur laborum nostrum ipsam assumenda ipsa
          iusto excepturi veniam Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Non optio ab perspiciatis doloribus rerum nam
          suscipit, porro asperiores eveniet sequi deleniti quas repellat
          aspernatur fugiat, harum pariatur nisi quis praesentium!
        </p>
        <br />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card bg-info">
              <img class="card-img-top" src="" alt="" />

              <div class="card-body">
                <h5 class="card-title">Create Quiz</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="d-grid gap-2 col-10 mx-auto">
                  <button
                    className="btn btn-outline-primary  "
                    id="creat quiz "
                  >
                    <Link
                      to="/Creat"
                      class="nav-link active"
                      aria-current="page"
                    >
                      {" "}
                      Create Quiz
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card bg-success">
              <img class="card-img-top" src="" alt="" />

              <div class="card-body">
                <h5 class="card-title">Give Quiz</h5>
                <p class="card-text text-light ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="d-grid gap-2 col-10 mx-auto">
                  <button className="btn btn-outline-danger " id="give quiz ">
                    <Link
                      to="/Give"
                      class="nav-link active"
                      aria-current="page"
                    >
                      {" "}
                      Give Quiz
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        {/* <Box
      sx={{
        width: 1260,
        height: 120,
        backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >

<Button variant="contained">Contained</Button>
      </Box> */}

      </div>
    </div>
  );
}
