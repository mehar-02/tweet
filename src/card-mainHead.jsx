import React from "react"
import './card-mainHead.css';
const CardMainHeader = ({title,id,supportingText}) => {
  return (
    <div className="image-header-parent">
        <div className="description">
            <div className="title">
               <p className="image-text display-sm--sb" style={{fontSize:'15px', margin:'10px'}}><u>{title}</u></p>
            </div>
            <div className="id">
               <p className="image-text display-sm--sb" style={{fontSize:'12px', margin:'10px', color:'grey'}}> {id}</p>
            </div>
        </div>
      <div className="following">
      {/* <p  className="image-supporting-text text-md" style={{fontSize:'10px', margin:'20px'}}>
    {supportingText}
      </p> */}
      <b><div style={{display:'flex', justifyContent: 'space-around',gap: '15px', margin: '10px', marginTop:'2px',color: 'grey', fontStyle:'bold'}}>
      <div>
        Tweets<br/>
        <div style={{color:'#7BD3EA', fontStyle:'bold'}}>
        5049
        </div>
      </div>
      <div>
        Followers<br/>
        <div style={{color:'#7BD3EA', fontStyle:'bold'}}>
        324
        </div>
      </div>
      <div>
        Following<br/>
        <div style={{color:'#7BD3EA', fontStyle:'bold'}}>
        809
        </div>
      </div>
      </div></b>
      </div>
    </div>
  );
};

export default CardMainHeader;