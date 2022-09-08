import React from 'react';
import './Button.css'

type ButtonProps={
    handleClick:() =>void
}


export const Button=(props:ButtonProps) =>{
    return(
       
            <button className="button button2" onClick={()=>props.handleClick()}>Submit</button>
      
    )
}