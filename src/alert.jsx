// import {AlertPopup} from '@attrybtech/attryb-ui';
import {
    AlertPopup,
    AlertPopupHeader,
    AlertPopupBody,
    AlertPopupFooter,
    Button,
    useModal,
} from '@attrybtech/attryb-ui';
import MyInputField from './input.jsx';
import React, {useState, useEffect} from "react";

function Alert({onClick}) {
        const { modalState, modalRef, exitModal, showModal } = useModal()
        const [inp, setInp] = useState("");
        const [state, setState] = useState(true);

    const modalOkayHandler = () => {
        console.log("Accepted")
        if(inp!=="" && inp!==null){
          onClick(inp);
          console.log("in okay ",inp);
          setInp("");
        }
        else{
          console.log("empty input");
        }
        exitModal()
    }

    const handleClick = (event) => {
        console.log('event in handleclick: ',event);
        
        //if(event!=="" && event!==null){
            setInp(event);
            console.log("in handleClick ",event);
            // setState(false);
        //}
    }
    const modalCancelHandler = () => {
        console.log("Cancelled")
        exitModal()
    }
    
    return (
        <div className="Doc DocAlertPopup">
            {/* <h1>Alert Popup</h1> */}
            <div className="DocEntry">
                {/* <h3>Standard Alert Popup</h3> */}
                <div className="Example" style={{ gridGap: "2rem"}}>
                    <Button onClick={showModal} style={{borderRadius: '1.5rem', backgroundColor: '#7BD3EA', border: '0px'}}>Tweet</Button>
                    <AlertPopup
                        wrapperRef={modalRef}
                        name="example-popup-1"
                        visibility={modalState}
                        onBackdropClick={modalCancelHandler}>
                        <AlertPopupHeader>Post Tweet</AlertPopupHeader>
                        <AlertPopupBody><MyInputField onType={handleClick} /></AlertPopupBody>
                        <AlertPopupFooter>
                            {/* <Button onClick={modalCancelHandler} variant="link">
                                Cancel
                            </Button> */}
                            <Button onClick={modalOkayHandler} style={{borderRadius: '1.5rem', backgroundColor: '#7BD3EA', border: '0px'}}>Post</Button>
                        </AlertPopupFooter>
                    </AlertPopup>
                </div>
            </div>
        </div>
    );
}

export default Alert;