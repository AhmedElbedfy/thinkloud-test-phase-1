import React from 'react'
import './Button.css'
function Button(props) {
    return (
        <>
            <button onClick={props.onClick} className={props.buttonClass}>{props.text}</button>
        </>
    )
}

export default Button
