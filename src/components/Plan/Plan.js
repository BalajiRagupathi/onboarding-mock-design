import React from 'react';
import SelectionBox from './SelectionBox/SelectionBox';
import Button from '../common/Inputs/Button/Button';

const Plan = (props) => {

    const onChangePlan = (planVal) => {
        
        let prevState = {...props.plan};
        prevState.plan = planVal;

        if (planVal && planVal.trim() !== "")
            prevState.planErr = null;
        props.setPlan({...prevState});
    }

    return (
        <>
            <div className='onboarding-content'>
                <h2 className='onboarding-title' >How are you planning to use Eden?</h2>
                <p className='onboarding-paragraph'>We'll streamline your setup experience accordingly.</p>
            </div>
            <div className='onboarding-plan-box'>
                <div  className='plan-box' >
                    <SelectionBox planValue="Single" actualPlan={props.plan} title="For Myself" paragraph="Write better. Think more clear. Stay organized." planChange={onChangePlan} />
                    <SelectionBox planValue="Team" actualPlan={props.plan} title="With My team" paragraph="Wikis, docs, tasks & projects, all in one place." planChange={onChangePlan} />
                </div>
                {props.plan.planErr && props.plan.planErr.trim() !== "" && <span style={{color: "red",textAlign: "center",margin: "10px auto",display: "block"}}>{props.plan.planErr}</span>}
                <Button content="Create Workspace" label="Create WorkSpace" onCompletion={props.nextStep} />
            </div>

        </>
    )
}

export default Plan;