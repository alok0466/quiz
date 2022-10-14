import React from 'react'
import { json } from 'react-router-dom';
import {index} from './Pra'
let x = index ; 
About(x)
 function About(x) {
let b = JSON.stringify(x)


  return (
    <div>
      <h1> TExtutils   </h1>
      {/* <button onClick={About}>adfadsfasdf</button> */}
    </div>
  )
}

export default About;

