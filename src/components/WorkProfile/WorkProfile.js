import React from 'react';
import Button from '../common/Inputs/Button/Button';
import SpanInput from '../common/Inputs/SpanInput/SpanInput';
import TextInput from '../common/Inputs/TextInput/TextInput';

const WorkProfile = (props) => {

    const onWorkSpaceNameChange = (e) => {
        let prevState = {...props.workProfile};
        prevState.workSpaceName = e.target.value.trim();
        
        if (e.target.value && e.target.value.trim() !== "")
            prevState.workSpaceNameErr = null;
        props.setWorkProfile({...prevState});
    }

    const onWorkSpaceURLChange = (e) => {
        let prevState = {...props.workProfile};
        prevState.workSpaceURL = e.target.value.trim();
        props.setWorkProfile({...prevState});
    }

    return (
        <>
            <div className='onboarding-content'>
                <h2 className='onboarding-title' >Let's set up a home for all your work</h2>
                <p className='onboarding-paragraph'>You can always create another workspace later</p>
            </div>
            <div className='onboarding-inputs' >
                <TextInput label="Workspace Name" inputValue={props.workProfile.workSpaceName} placeHolder="Eden" error={props.workProfile.workSpaceNameErr} inputOnchange={onWorkSpaceNameChange} isRequired={true} />
                <SpanInput label="Workspace URL" inputValue={props.workProfile.workSpaceURL} spanValue="www.eden.com/" placeHolder="Example" inputOnchange={onWorkSpaceURLChange} isRequired={false} />
                <Button content="Create Workspace" label="Create WorkSpace" onCompletion={props.nextStep} />
            </div>
        </>
    )
}

export default WorkProfile;