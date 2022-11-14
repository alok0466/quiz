import { blue } from '@mui/material/colors';
import React, { useState } from 'react'

export default function Result() {

const[result,setresult] = useState()

let ShowResult = () =>
{
    let myresult = localStorage.getItem("Result");
    setresult(myresult);
    var demo = document.getElementById("ramram");
    demo.style.color = blue
 
    
}





  return (
    <div>
    <button className="btn btn-primary" onClick={ShowResult}>
        Show my result 
    </button>

    <div className='border' id='ramram'>
        <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt, temporibus quas veniam qui a doloribus facere nisi quos totam rerum tempora nemo omnis laudantium praesentium. Nostrum doloremque praesentium amet libero. Ipsam vitae aliquam deleniti nesciunt maiores impedit perspiciatis dolorem expedita eaque inventore, aliquid, nostrum vel ipsa ut numquam sed!
    </div>
    </div>
  )
}
