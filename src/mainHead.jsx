import React from "react"

const MainHeader = ({title,id,supportingText}) => {
  return (
    <div className="image-header-parent">
      <p className="image-text display-sm--sb" style={{fontSize:'16px', margin:'0px', marginTop:'5px'}}>{title} <a style={{fontSize:'15px', marginBottom:'0px', color: 'grey'}}>{id}</a></p>
      <p  className="image-supporting-text text-md" style={{fontSize:'14px', marginTop:'2px', wordBreak:'break-all'}}>
    {supportingText}
      </p>
    </div>
  );
};

export default MainHeader;