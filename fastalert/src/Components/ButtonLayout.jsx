import React from "react";

function Button (props){
    return(
        <button className={props.class}>{props.img }{props.text}</button>

    )
}
export default Button