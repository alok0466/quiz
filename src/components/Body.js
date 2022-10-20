import React from 'react'
import { Link } from 'react-router-dom'
// import './Body.css';
export default function Body() {
  return (
    <div>

      
      
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap demo</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
    crossOrigin="anonymous"
  />

<br />
<div className="container">

<button className="btn btn-primary container"  id='creat quiz '>
<Link to="/Creat" class="nav-link active" aria-current="page">
                  {" "}
                Create Quiz
                </Link>
</button>
<br />
<br />

<button className="btn btn-primary container"  id='give quiz '>
<Link to="/Give" class="nav-link active" aria-current="page">
                  {" "}
            Give Quiz 
                </Link>
</button>


</div>
    </div>
  )
}






