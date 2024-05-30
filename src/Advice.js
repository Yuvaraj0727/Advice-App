import { useState } from "react";

import "./index.css"

const Advice = ()=>{

    const [count, setCount]=useState(0)
    const [advice, setAdvice]= useState("Please Click the Button to getAdvice")

    async function getAdvice(){
        const msg= await fetch("https://api.adviceslip.com/advice")
        const data =  await msg.json();
        //console.log(data);
        setAdvice(data.slip.advice);
        setCount(count+1)
    }
    return(
        <div className="advice">
            <h2>{advice}</h2>
            <button onClick={getAdvice} >Get Advice </button>
            <h4>You have Got <span>{count}</span> Advice </h4>
        </div>
    )
}

export default Advice;

//https://api.adviceslip.com/advice