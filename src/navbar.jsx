// import { Navbar} from '@attrybtech/attryb-ui';
import Navbar from "./nav2.jsx";
import React, {useState} from "react";
import Alert from "./alert.jsx";

function Nav({onClick}){

    const handleInput = (event) => {
        // setInput(event.target.value);
        onClick(event);
    }
    
    return (
        <Navbar
            navbarLeftSection={
                <>
                <button className='btn'>Home</button>
                <button className='btn'>Moments</button>
                <button className='btn'>Notifications</button>
                <button className='btn' style={{marginRight:'0'}}>Messages</button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" height={20} />
                </>
            }
            navbarRightSection={
                <>
                <Alert onClick={handleInput} />
                </>
            }
        />
    )
}

export default Nav;