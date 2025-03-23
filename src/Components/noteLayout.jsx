import React, { useState } from "react";

function NoteLayout(props){
    const  [isHover,setHover] = useState(false)
    function hover(){
        setHover(true)
    }
    function leaveHover(){
        setHover(false)
    }
    return(
        <div className="secondPage_note" style={{backgroundColor: isHover? props.color : 'white'}} onMouseOver={hover} onMouseOut={leaveHover}>
        <h2 style = {{ color: isHover? "white" : props.color,}}>{props.title}</h2>
        <p>{props.content}</p> 
        <img className = {`card-img ${isHover ? 'animate-in' : "animate-out"}`} src={props.img} alt="" />
        </div>
    )
}
export default NoteLayout