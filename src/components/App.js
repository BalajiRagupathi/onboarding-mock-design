import React, {useState} from 'react';
import Profile from './Profile/Profile';
import WorkProfile from './WorkProfile/WorkProfile';
import Plan from './Plan/Plan';
import Completion from './Completion/Completion';
import './App.css'

const App = () => {

  const navBars = [1,2,3,4];
  const [active,setActive] = useState(1);
  const [userInfo,setUserInfo] = useState({
    fullName: "",
    fullNameErr: null,
    displayName: "",
    displayNameErr: null,
    workSpaceName: "",
    workSpaceNameErr: null,
    workSpaceURL: "",
    plan: "",
    planErr: null,
  });

  const clearAll = () => {
    setActive(1);
    setUserInfo({
      fullName: "",
      fullNameErr: null,
      displayName: "",
      displayNameErr: null,
      workSpaceName: "",
      workSpaceNameErr: null,
      workSpaceURL: "",
      plan: "",
      planErr: null,
    })
  }

  const activeNav = (navId) => {

    let prevState = {...userInfo};

    switch(navId) {
      case 1:
        setActive(navId);
      case 2: {
        if ( !userInfo.displayName ||  userInfo.displayName?.trim() === ""){
          prevState.displayNameErr = "Display Name should not be empty";
        }
        if (!userInfo.fullName || userInfo.fullName?.trim() === "" ){
          prevState.fullNameErr = "Full Name should not be empty";
        }
        
        if (prevState.displayNameErr || prevState.fullNameErr) 
          setUserInfo({...prevState});
        else
          setActive(navId);
        break;
      }
      case 3: {
        
        if (!userInfo.workSpaceName || userInfo.workSpaceName?.trim() === ""){
          prevState.workSpaceNameErr = "Workspace Name should not be empty";
        }
        
        if (prevState.workSpaceNameErr) 
          setUserInfo({...prevState});
        else
          setActive(navId);
        break;
      }
      case 4: {
        
        if (!userInfo.plan || userInfo.plan?.trim() === ""){
          prevState.planErr = "Plan should not be empty";
        }
        
        if (prevState.planErr) 
          setUserInfo({...prevState});
        else
          setActive(navId);
        break;
      }
    }
  }

  const contentRender = () => {
    switch (active) {
      case 1:
        return (
          <Profile profile={userInfo} setProfile={setUserInfo} nextStep={() => activeNav(active+1)} />
        )
      case 2:
        return (
          <WorkProfile workProfile={userInfo} setWorkProfile={setUserInfo} nextStep={() => activeNav(active+1)} />
        )
      case 3:
        return (
          <Plan plan={userInfo} setPlan={setUserInfo} nextStep={() => activeNav(active+1)} />
        )
      case 4:
        return (
          <Completion completion={clearAll} />
        )
      default:
        return null;
    }
  }

  return (
    <div className='container'>      
      <div className='logo'><h1>Eden</h1></div>
      <nav className='nav-bar'>
        {navBars 
          && 
        navBars?.map(
          (el,id) => <a key={id} style={{cursor:"pointer"}}  className={active>= el ? 'active' : ''} onClick={(e) => {e.preventDefault();activeNav(el)}} >{el}</a>
        )}
        <div className="line"></div>
        <div className="line2"></div>
      </nav>
      {contentRender()}
    </div>
  );
}

export default App;
