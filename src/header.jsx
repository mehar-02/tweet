import React from 'react';
import MainHeader from './mainHead.jsx';
import Profile from './profile.jsx';
import './header.css';
function Header({input}) {
    return (
        <div style={{display:'flex', justifyContent:'center',margin:'10px'}}>
        <div className="head-top">
            
          <div className="Doc DocAlertPopup input-header">
            {/* <h1>Main Header</h1> */}
            <Profile />
            <div className="DocEntry" style={{margin:'0px'}} >
                <div className="Example" style={{margin:'0px'}} >
                    <MainHeader title="Joey" id="@joey Feb 24" supportingText={input} />
                </div>
            </div>
        </div>
       </div>
       </div>
      );
}

export default Header;

//width: 70rem