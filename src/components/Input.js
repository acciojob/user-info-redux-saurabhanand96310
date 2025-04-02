import React from "react"
import { useDispatch, useSelector } from "react-redux"
// import Store from "../Store";


const Input=()=>{
    const nameState=useSelector((state)=>state.name.name)
    const emailState=useSelector((state)=>state.email.email)
    const dispatch=useDispatch();
    return(
        <><label for="nameinput">Name:</label>
        <input id="nameinput" type="text" onChange={(e)=>dispatch({type:"nameUpdate",payload:e.target.value})}></input>
        <label for="emailInput">Email:</label>
        <input id="emailInput" type="email"  onChange={(e)=>dispatch({type:"emailUpdate",payload:e.target.value})}></input>
        <p>Current values in store:</p>
        <p className="output">Name - {nameState}</p>
        <p className="output">Email - {emailState}</p>
        </>
    )
}

export default Input