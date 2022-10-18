import React from "react";
import "./SelectionBox.css"

const SelectionBox = (props) => {

    const checkCurrentPlanSelected = () => props?.actualPlan?.plan === props?.planValue;

    return (
        <div className={ checkCurrentPlanSelected() ? "plan-selection-box plan-active": "plan-selection-box" } onClick={() => props.planChange(props.planValue)} >
            <div className="plan-selection-icon" >
                <a style={{cursor:"pointer"}} >
                    {props?.planValue==="Single" ?
                    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={ checkCurrentPlanSelected() ? "#664de5" :""}>
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                    </svg>) : 
                    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill={ checkCurrentPlanSelected() ? "#664de5" :""}>
                        <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                    </svg>)}
                </a>
            </div>
            <h5 className="plan-title" >{props.title}</h5>
            <p className="plan-paragraph" >{props.paragraph}</p>
        </div>
    )
}

export default SelectionBox;