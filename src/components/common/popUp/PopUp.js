import { createContext, useEffect, useState } from "react";
import CloseIcon from "../../svg/CloseIcon";
import './popUp.scss';
export const PopUpContext = createContext({});


const PopUp = (Props)=>{
    const [popUpVisiblityData,changePopUpVisiblityData] = useState({
        visiblity:false,
        type:"large",
        strict:false,
        component:{}
    });
    const [popUpHide,closePopUp] = useState(true);
    const Context = {
        state:popUpVisiblityData,
        showPopUp:(type,component,strict=false)=>{
            closePopUp(false);
            changePopUpVisiblityData({visiblity:true,type:type,strict:strict,component:component});
        },
        closePopUp:()=>{
            changePopUpVisiblityData({visiblity:false,type:popUpVisiblityData.type,strict:false,component:{}});
            setTimeout(()=>{closePopUp(true)},200)
        }  
    };
    return(
        <PopUpContext.Provider value={Context}>
            <main>
                {Props.children}
            </main>
              {!popUpHide && <div className="popUpOuterContainer">
                <div  className={popUpVisiblityData.type=="large" ? popUpVisiblityData.visiblity?"enterAnimaiton largePopUpInnerContainer":"exitAnimation largePopUpInnerContainer" : popUpVisiblityData.visiblity?"enterAnimaiton smallPopUpInnerContainer":"exitAnimation smallPopUpInnerContainer" }>
                    {!popUpVisiblityData.strict && <div className="popUp-header" >
                        <button className="btn" onClick={()=>{Context.closePopUp()}}>
                            <CloseIcon height={20} width={20} color="black" />
                        </button>
                    </div>}
                    <div className="popUp-body">
                    
                    {(Object.keys(popUpVisiblityData.component).length === 0 && popUpVisiblityData.component.constructor === Object) ?null:popUpVisiblityData.component}
                    </div>
                </div>
              
            </div>
            }
        </PopUpContext.Provider>
        
        
    )
}
export default PopUp;