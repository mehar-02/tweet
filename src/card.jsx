import React from "react";
// import { MainHeader } from '@attrybtech/attryb-ui';
import CardMainHeader from "./card-mainHead";
import './card.css';

function Card () {
    return(
        <div className="card-main">
      <div className="Doc DocAlertPopup card-alert" style={{minWidth:'226px'}} >
        {/* <h1>Main Header</h1> */}
        <div className="dog-img" style={{height:'10rem'}}>
        {/* <img src="https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents.jpg" className="background-img" /> */}
        <img src="https://logos.textgiraffe.com/logos/logo-name/Joey-designstyle-pastel-m.png" className="background-img" />
        <div style={{objectFit:'contain'}}>
           <img src="https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents.jpg" className="profile-img" />
        </div>
        </div>
        <div className="DocEntry" style={{padding: '10px'}}>
            <div className="Example" >
                <CardMainHeader title="Joey" id="@joey" supportingText="" />
            </div>
        </div>
    </div>
   </div>
    );
}

export default Card;

//width: 25rem