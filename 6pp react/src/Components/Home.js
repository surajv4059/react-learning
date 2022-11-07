import React from 'react';
import { useState,useEffect } from 'react';

const Home = () => {

    useEffect(()=>{
        console.log("run run");
    },[])

    const [inputValue,setInputValue] = useState(0);
    console.log(inputValue)
    const increment = () =>{
        setInputValue(inputValue+1);
        
    }
    
    const decrement = () =>{
        setInputValue(inputValue-1);
    }
    
    const onchFun = (e) => {
        inputValue = e.target.value
        console.log(inputValue);
    }


    const btnStyle = {
        padding:13,
        border: "none",
        backgroundColor:"#f1f1f1",
        margin:10

    }
    const inputStyle = {
        padding:20,
        border: "2px solid green",
        
    }
  return (
    <div>
        <input type="number" placeholder='Enter something' style = {inputStyle} value={inputValue}  readOnly/>
        <button style= {btnStyle} onClick={increment}>+</button>
        <button style= {btnStyle} onClick={decrement}>-</button>
    </div>
  )
}

export default Home