import React from "react";
import "./SpanInput.css"

const SpanInput = (props) => {

    return (
        <>
            <label className='input-label' >{props.label} { !props?.isRequired && <span className='color-gray' >(optional)</span>}</label>
            <div className="form-group">
                <span>{props.spanValue}</span>
                <input className="form-field" type="text" placeholder={props.placeHolder} />
            </div>
        </>
    )
}

export default SpanInput;