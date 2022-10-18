import React from 'react';
import Button from '../common/Inputs/Button/Button';
import TextInput from '../common/Inputs/TextInput/TextInput';

const Completion = (props) => {

    return (
        <>
            <div className='onboarding-content'>
                <div className='onboarding-completion' >&#10004;</div>
                <h2 className='onboarding-title' >Congratulations, Eden!</h2>
                <p className='onboarding-paragraph'>You have completed onboarding, you can start using Eden!</p>
            </div>
            <div className='onboarding-inputs' >
                <Button content="Create Workspace" label="Launch Eden" onCompletion={props.completion}/>
            </div>
        </>
    )
}

export default Completion;