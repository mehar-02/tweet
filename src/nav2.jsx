import React from "react";



const Navbar = ({
    navbarRightSection,
    navbarLeftSection
}) => {

   
    return <>
        <nav className="Navbar" >
            <div className="navbar-left-section">
              {navbarLeftSection}
            </div>
            <div className="navbar-right-container-wrapper">
                
                {navbarRightSection}
            
            </div>
        </nav>
        </>
    
}

export default Navbar;
