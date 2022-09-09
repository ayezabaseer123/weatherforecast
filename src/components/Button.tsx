import React from 'react';
import './Button.css'

type ButtonProps={
    handleClick:() =>void
}


export const Button=({handleClick}:ButtonProps) =>{
    return(
       
            <button className="button button2" onClick={()=>handleClick()}>Submit</button>
      
    )
}