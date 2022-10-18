import React, {useState} from 'react';
import Button from '../common/Inputs/Button/Button';
import TextInput from '../common/Inputs/TextInput/TextInput';


const Profile = (props) => {

    const onNameChange = (e) => {
        let prevState = {...props.profile};
        prevState.fullName = e.target.value.trim();

        if (e.target.value && e.target.value.trim() !== "")
            prevState.fullNameErr = null;
        props.setProfile({...prevState});
    }

    const onDisplayNameChange = (e) => {
        let prevState = {...props.profile};
        prevState.displayName = e.target.value.trim();
        if (e.target.value && e.target.value.trim() !== "")
            prevState.displayNameErr = null;
        props.setProfile({...prevState});
    }

    return (
        <>
            <div className='onboarding-content'>
                <h2 className='onboarding-title' >Welcome! First things first...</h2>
                <p className='onboarding-paragraph'>You can always change theme later</p>
            </div>
            <div className='onboarding-inputs' >
                <TextInput label="Full Name" inputValue={props.profile.fullName} placeHolder="Steve Jobs" error={props.profile.fullNameErr} inputOnchange={onNameChange} isRequired={true} />
                <TextInput label="Display Name" inputValue={props.profile.displayName} placeHolder="Steve" error={props.profile.displayNameErr} inputOnchange={onDisplayNameChange} isRequired={true} />
                <Button content="Create Workspace" label="Create WorkSpace" onCompletion={props.nextStep} />
            </div>
        </>
    )
}

export default Profile;