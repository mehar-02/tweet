import React, {useState} from "react";
import { ProfileDropDown } from '@attrybtech/attryb-ui';
import './profile.css';

function Profile() {
    const [showProfile, setShowProfile] = useState(false)
    const name = "Joey";
    const email = "joey@gmail.com";
    const userImage = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
    const organizationName = "";
    const attrybLogo = "/attryb-ui/assets/icons/navbar/attryb-logo.svg";

    const urlCallBack = (domain,url, openIn) => {        
        if (!url) return

        if (openIn == "redirect") {
            // navigate(url);
        } else {
            window.open(`${domain}${url}`, openIn, "noreferrer")
        }
    }

    const handleProfileToggle = () => {
        setShowProfile(!showProfile)
    }
    const hideProfileHandler = () => {
        setShowProfile(false)
    }

    const productsConfig = [
        {
            id:"94232b08-7d33-11ed-9f3b-00155d3e8ac7",
            domain:"https://personalization-demo.attryb.com",
        },
        {
            id:"942338b7-7d33-11ed-9f3b-00155d3e8ac7",
            domain:"https://alpha.attryb.com",
            active:true
        }
    ]
    const signOutCallBack =()=>{
        //logic of signOut
    }

    return(
        <ProfileDropDown className="pro"
                    showProfile={showProfile}
                    hideProfileHandler={hideProfileHandler}
                    handleProfileToggle={handleProfileToggle}
                    productsConfig={productsConfig}
                    userImage={userImage}
                    organizationName={organizationName}
                    name={name}
                    email={email}
                    urlCallBack={urlCallBack}
                    profileChevronIcon={
                        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                    }
                    productChevronIcon={
                        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                    }
                    settingUrlOpenIn="redirect"
                    signOutCallBack={signOutCallBack}
                />
    );
}

export default Profile;