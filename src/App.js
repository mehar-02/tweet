import logo from './logo.svg';

// import Navbar from './navbar';

import React,{useState} from 'react';
import './App.css';
import Nav from './navbar';
// import Alert from './alert';
import Header from './header';
// import { Alert} from '@attrybtech/attryb-ui';
import Alert from './alert-popup.jsx';
import Card from './card';


function App() {
  const [input, setInput] = useState("Hey");
  const [inputs, setInputs] = useState([input]);
  const [showAlert,setShowAlert]=useState(false)
  const [themeofAlert,setAlertTheme]=useState("success")
  const handleInput = (event) => {
    if(event!==null && event!==""){
      setInput(event);
    // setInputs(current => [...current,event]);
      const newInp = [event,...inputs];
      setInputs(newInp);
      setShowAlert(true);
      setAlertTheme("success");
    }
    else{
      setShowAlert(false);
    }
    // setInputs(current => event.concat(current));
  }
  return (
    <>
    <Nav onClick={handleInput} />
    <div className="main-page">
    {/* <DocSidebar /> */}
    <div className="card">
      <Card />
    </div>
    {/* <Header input={"What's up?"} /> */}
      {/* <Header input={"hello"} /> */}
    <div>
     
    {input!==null && input!=="" && inputs.map(text => 
         <Header input={text} />
         
    )}
    </div>
    </div>
    {showAlert && <Alert content="Tweet Posted" theme={themeofAlert} />}
    {/* <Alert /> */}
    {/* <Button onClick={()=>[setShowAlert(true),setAlertTheme("info")]}  colorScheme="primary" 
                     >  
                  Info Alert   
                       </Button> */}
    
    </>
  );
}

export default App;
