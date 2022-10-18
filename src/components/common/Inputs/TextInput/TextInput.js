import React from "react";
import "./TextInput.css"

const TextInput = (props) => {

    return (
        <div className="input-content">
            <label className="input-label" >{props.label} { !props?.isRequired && <span className='color-gray' >(optional)</span>}</label><br/>
            <input className="input-text" type="text" value={props.inputValue} placeholder={props.placeHolder} onChange={props.inputOnchange} />
            {props.error && props.error.trim() !== "" && <span style={{color: "red"}} >{props.error}</span>}
        </div>
    )
}

export default TextInput;