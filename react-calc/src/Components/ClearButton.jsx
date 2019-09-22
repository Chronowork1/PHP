import React from "react";
import './ClearButton.css';

//Props.children refers back to Button.jsx when we implement props.children
// onClick epquals when clicked 
export const ClearButton = (props) => (
    <div className = "clear-btn" onClick = {props.handleClear}>
        {props.children}
    </div>
)