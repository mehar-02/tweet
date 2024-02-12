import React, { useState, useEffect, useRef } from "react";
import "./index.sass";
import { Badge } from "../../pure-components";


const breakpointTablet = 1024

// type option = {
//     _id: string,
//     route: string,
//     title: string,
//     asset: string,
//     selectedAsset:string,
//     subItems:any[],
//     isDisabled?:boolean
// }

// type SideBarProps= {
//     sidebarData: any[] ,
//     sideBarHeaderData: {
//         sideBarLogo: string,
//         sideBarHeaderTitle: string
//     },
//     handleItemOnClick: (str :string , element: option ) => void ,
//     subHeaderComponent?: {
//         collapse: React.ReactNode ,
//         uncollapse: React.ReactNode
//     },
//     signOutCallback:()=>void,
//     supportCallback?:()=>void
// }

const Sidebar = ({ sidebarData, sideBarHeaderData, handleItemOnClick, subHeaderComponent, signOutCallback, supportCallback }) => {

    const [collapseState, setCollapseState] = useState(false)
    const [currentNavItem, setCurrentNavItem] = useState("")
    const [currentNestedOption,setCurrentNestedOption]=useState("")
    const [contentHeight,setContentHeight]=useState("0px")
    const menuWrapperRef=useRef(null)

    const [openNestedOptions,setOpenNestedOptions]=useState(false)


    function handleToggle() {
        setCollapseState(!collapseState)
        if(collapseState==false){
            setOpenNestedOptions(false)
        }
    }

    const screenwidth = window.innerWidth
    useEffect(() => {
        if (screenwidth < breakpointTablet && !collapseState) {
            setCollapseState(true)
        }
    }, [screenwidth])

    function handleSelectElement  (element) {
        setCurrentNavItem(element._id) 
        handleItemOnClick(element.route , element)
        setOpenNestedOptions(false)
        if(element.subItems){
            if(collapseState==false){
                setOpenNestedOptions(!openNestedOptions)
                setCurrentNestedOption("")
            }
           

        }
    }
    useEffect(()=>{
        const paths=window.location.pathname.split("/")
        sidebarData.forEach((el)=>{
            if(el.route===`/${paths[1]}`){
                setCurrentNavItem(el._id)
            }
        })
    },[window.location.pathname])

    useEffect(()=>{

    if(menuWrapperRef){
        setContentHeight( menuWrapperRef?.current?.scrollHeight+"px")
    }

        },[openNestedOptions,menuWrapperRef])

   const  handleNestedOptionClick=(e,element)=>{
   
    setCurrentNestedOption(element._id)
    handleItemOnClick(element.route , element)
    e.stopPropagation()
    
    }
    const getCurrentShowState=(el)=>{
       if(collapseState ){
        if(el.subItems)return false
       }
       return true
    }
    return (
        <div className={`AppSidebar ${collapseState ? "collapse-sidebar-wrapper" : "open-sidebar" }`} >


            <div className="arrow-to-collapse" onClick={() => { handleToggle() }} >
                {/* <img src={collapseState ? "/attryb-ui/assets/icons/sidebar/chevron-right.svg" : "/attryb-ui/assets/icons/sidebar/chevron-left.svg"} alt="" /> */}
            </div>

                    <>
                        <div>
                            <div className="header-sidebar" >

                                <div className="header-sidebar-content">
                                    <div className="header-sidebar-logo">
                                        <img src={sideBarHeaderData?.sideBarLogo} alt="" />
                                    </div>
                                    {
                                        !collapseState ? 
                                        <p className="text-lg--sb" >{sideBarHeaderData?.sideBarHeaderTitle}</p>
                                        : 
                                        <></>
                                    }
                                </div>
                            </div>

                            {subHeaderComponent &&
                                 <div className="sidebar-subheader--wrapper">
                                    {!collapseState ? subHeaderComponent.uncollapse : subHeaderComponent?.collapse}
                                </div>                             
                            }
                            <div className="sidebar-body__wrapper">
                                <div className="body-sidebar">
                                    {
                                        sidebarData?.map((element, index) => (
                                            <div className={element.isDisabled?"disable-sidebar-option":""} onClick={() => handleSelectElement(element) }  key={index}  >
                                                <div className={`sidebar-option ${currentNavItem === element._id&&!openNestedOptions ? "sidebar-active-element" : "sidebar-unactive-element"}`}>
                                                   <div className="sidebar-option-icon-text-wrap">
                                                   <div className="sidebar-icon_wrap">
                                                       {/* {currentNavItem===element._id? <img src={element.selectedAsset} alt="" />:
                                                      <img src={element.asset} alt="" />} */}
                                                    </div>
                                                    {
                                                       !collapseState ?  
                                                       <p className="text-md--md" >{element.title}</p>
                                                       : <></>
                                                    }
                                                   </div>
                                                
                                                  {element?.subItems&&!collapseState&&<div className={currentNavItem===element._id&&openNestedOptions?"sidebar-icon_wrap":"sidebar-icon_wrap rotate-down-icon"}>
                                                    {/* <img src={"/attryb-ui/assets/icons/sidebar/chevron-up.svg"} alt="" /> */}
                                                  </div>}
                                                  {element?.isDisabled&&!collapseState&&<div>
                                                    <Badge variant="gradient" labelText="Coming Soon"/>
                                                  </div>}
                                                </div>
                                              {element.subItems&&
                                              <div ref={menuWrapperRef} style={currentNavItem===element._id&&openNestedOptions?{height:contentHeight}:{}} className={`${currentNavItem===element._id&&openNestedOptions && 'open-nested-items'} nested-options-menu-wrapper transition-menu-wrapper`}>
                                               {element?.subItems?.map((el)=>
                                               <div key={el._id} onClick={(e)=>handleNestedOptionClick(e,el)} className={`sidebar-option nested-sidebar-option  ${currentNestedOption === el._id ? "sidebar-nested-active-element" : "sidebar-nested-unactive-element"} `}>
                                                <p className="text-sm--md nested-option-title" >{el.title}</p>
                                                </div>)}
                                            </div>
                                            }
                                                
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="footer-sidebar body-sidebar">
                            <div >
                                <div className="sidebar-option sidebar-unactive-element" onClick={supportCallback}>
                                    <div className="sidebar-option-icon-text-wrap">
                                    <div className="sidebar-icon_wrap">
                                        {/* <img src={"/attryb-ui/assets/icons/sidebar/support.svg"} alt="" /> */}
                                    </div>
                                    {
                                        !collapseState ? 
                                        <p className="text-md--md">Support</p>
                                        : <></>
                                    }
                                    </div>
                                </div>
                            </div>
                            <div  >
                                <div className="sidebar-option sidebar-unactive-element" onClick={signOutCallback} >
                                   <div className="sidebar-option-icon-text-wrap"> <div className="sidebar-icon_wrap">
                                        {/* <img src={"/attryb-ui/assets/icons/sidebar/log-out.svg"} alt="" /> */}
                                    </div>
                                    {
                                        !collapseState ? 
                                        <p className="text-md--md">Log Out</p>
                                        : <></>
                                    }</div>
                                </div>
                            </div>
                        </div>
                    </>
        </div>
    )
}

export default Sidebar