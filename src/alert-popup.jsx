import React, { useEffect, useRef,useState } from "react";


const Alert = ({
  variant = "active",
  timeSpan = 3000,
  content = "",
  theme="success",
  ctaData,
  hideContainer,
  navigateToAlertData

}) => {

   const getAlertIcon=(theme)=>{
    if(theme==="success")return "/attryb-ui/assets/icons/alert-icons/check-success-icon.svg"
    if(theme==="danger")return "/attryb-ui/assets/icons/alert-icons/alert-circle-danger-icon.svg"
    if(theme==="warning")return "/attryb-ui/assets/icons/alert-icons/alert-triangle-warning-icon.svg"
     return "/attryb-ui/assets/icons/alert-icons/circle-info-icon.svg"
  }

  const container = useRef(null);
  const [isVisible,setIsVisible] = useState(true)
  let timerId;

  const startTimer = () => {

    timerId = setTimeout(hideContainer, timeSpan);
    
  };

  const stopTimer = () => {
    hideAlert()
    clearTimeout(timerId);
    
  };

const hideAlert =()=>{
  setIsVisible(false)
}
  useEffect(() => {
    startTimer()
  }, [theme]);
  return isVisible ? (
    <div ref={container} className="box-alert-wrapper-parent">
      <div className={`alert-box-wrapper-${theme}`}>
        <div className={`alert-box-left-bar-${theme}`}></div>
        <div className="alert-box-wrapper-leftsection">
              <div className="alert-icon-svg-wrapper">
              <img src="https://i.pinimg.com/originals/b8/cc/30/b8cc30277d4134cebca1105ac86be61c.png" alt="" />
              </div>

            <p className="alert-text-heading text-md--md">{content}</p>
          
        </div>
       <div className="alert-cross-parent-wrapper">
      {Object.keys(ctaData||{}).length!==0? <div onClick={()=>navigateToAlertData()} >
          <p className={`alert-cta-button-${theme} text-sm--sb`}>{ctaData?.title}</p>
        </div>:null}
          <div onClick={stopTimer} className="close-alert-icon-wrapper">
            <img src={`https://cdn.icon-icons.com/icons2/950/PNG/512/cross-symbol_icon-icons.com_74149.png`} alt="" />
          </div>
       </div>
     
    </div>
    
    </div>
  ):null;
};

export default Alert;