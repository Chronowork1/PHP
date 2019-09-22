import React from 'react';
import "./Button.css";

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

//Create a functional component
//with a props for function call
//Pass the opening and closing tag of button and whatever inside in the middle
//Ex: 7, 8, 9
//Classname equals button-wrapper and 
//When the button is clicked, creates an anonymous function
//passed in props.handleClick with props.children
export const Button = props => (
    <div className = {`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`} onClick = {() => props.handleClick(props.children)}>
        {props.children}
    </div>
)