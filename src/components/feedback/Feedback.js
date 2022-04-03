import { useReducer, useState } from "react"
import  Button from "../common/button/Button"
import RadioButton from "../common/button/RadioButton"
import './feedback.scss'
const initialFeedback = {
    star:4,
    nextBooking:"definitely",
    recommend:"definitely",
    refrenceFrom:"google",
    suggestion:""
}
const reducer = (state,action)=>{
    if(action.type=="star"){
        let temp = {...state};
        temp.star = action.val;
        return temp;
    }
    if(action.type=="nextBooking"){
        let temp = {...state};
        temp.nextBooking = action.val;
        return temp;
    }
    if(action.type=="recommend"){
        let temp = {...state};
        temp.recommend = action.val;
        return temp;
    }
    if(action.type=="refrenceFrom"){
        let temp = {...state};
        temp.refrenceFrom = action.val;
        return temp;
    }
    if(action.type=="suggestion"){
        let temp = {...state};
        temp.suggestion = action.val;
        return temp;
    }
}
const Feedback = ()=>{
    const [feedBack,dispatch] = useReducer(reducer,initialFeedback);
    return(
        <div className="feedBackContainer">
            <h1>Your Feedback Matters</h1>
            <hr/>
            <h2 className="question">
                How satisfied are you with the booking experience?
            </h2>
            <div className="container">
            <div className="feedBack">   
                <button className={feedBack.star>0?"feedBackActiveCircle":"feedBackCircle"}  onClick={()=>{dispatch({type:'star',val:1})}}></button>
                <button className={feedBack.star>1?"feedBackActiveCircle":"feedBackCircle"} onClick={()=>{dispatch({type:'star',val:2})}}></button>
                <button className={feedBack.star>2?"feedBackActiveCircle":"feedBackCircle"} onClick={()=>{dispatch({type:'star',val:3})}}></button>
                <button className={feedBack.star>3?"feedBackActiveCircle":"feedBackCircle"} onClick={()=>{dispatch({type:'star',val:4})}}></button>
                <button className={feedBack.star>4?"feedBackActiveCircle":"feedBackCircle"} onClick={()=>{dispatch({type:'star',val:5})}}></button>
            </div>
                
            </div>
            <h2 className="question">
                Would you choose us to be your MUN booking partner in the future?
            </h2>
            <div className="container" >
                <div className="innerContainer">
                    <div className="smallBtn">
                            <RadioButton onClick={()=>{dispatch({type:'nextBooking',val:"no"})}}  isSelected={feedBack.nextBooking=='no'?true:false} text="Not at all" /> 
                    </div> 
                    <div className="smallBtn">
                            <RadioButton onClick={()=>{dispatch({type:'nextBooking',val:"maybe"})}} isSelected={feedBack.nextBooking=='maybe'?true:false} text="May be" />
                    </div>
                    <div className="smallBtn">
                            <RadioButton onClick={()=>{dispatch({type:'nextBooking',val:"definitely"})}} isSelected={feedBack.nextBooking=='definitely'?true:false} text="Definitely" />
                    </div>
               </div>
            </div>
            <h2 className="question">
                    Would you recommend MyNextMUN to a friend?
            </h2>
            <div className="container">
                <div className="innerContainer">
                    <div className="smallBtn">
                            <RadioButton onClick={()=>{dispatch({type:'recommend',val:"no"})}}  isSelected={feedBack.recommend=='no'?true:false} text="Not at all" /> 
                    </div> 
                    <div className="smallBtn">
                            <RadioButton onClick={()=>{dispatch({type:'recommend',val:"maybe"})}} isSelected={feedBack.recommend=='maybe'?true:false} text="May be" />
                    </div>
                    <div className="smallBtn">
                            <RadioButton onClick={()=>{dispatch({type:'recommend',val:"definitely"})}} isSelected={feedBack.recommend=='definitely'?true:false} text="Definitely" />
                    </div>
                </div>
            </div>
            <h2 className="question">
                How did you hear about us?
            </h2>
            <div className="container">
                <div className="innerContainer">
                    <div className="smallBtn">
                        <RadioButton onClick={()=>{dispatch({type:'refrenceFrom',val:"google"})}} isSelected={feedBack.refrenceFrom=='google'?true:false} text="Google" /> 
                    </div> 
                    <div className="smallBtn">
                        <RadioButton onClick={()=>{dispatch({type:'refrenceFrom',val:"mouth"})}}  isSelected={feedBack.refrenceFrom=='mouth'?true:false} text="Word of mouth" />
                    </div>
                    <div className="smallBtn">
                        <RadioButton onClick={()=>{dispatch({type:'refrenceFrom',val:"event"})}} isSelected={feedBack.refrenceFrom=='event'?true:false} text="In-Person event" />
                    </div>
                </div>
                <div className="innerContainer">
                    <div className="smallBtn">
                        <RadioButton onClick={()=>{dispatch({type:'refrenceFrom',val:"socialmedia"})}} isSelected={feedBack.refrenceFrom=='socialmedia'?true:false} text="Social Media" /> 
                    </div> 
                    <div className="largeBtn">
                        <RadioButton onClick={()=>{dispatch({type:'refrenceFrom',val:"other"})}} isSelected={feedBack.refrenceFrom=='other'?true:false} text="Other" />
                    </div>
                </div>
            </div>
            <h2 className="question">
                Help us make MyNextMUN the best it can be.
            </h2>
        
            <div className="container">
                <textarea value={feedBack.suggestion} onInput={(e)=>{dispatch({type:'suggestion',val:e.target.value})}} placeholder="Leave a suggestion..." cols="5" rows="5" />
            </div>
            
            <div className="submit">
                <div style={{width:"100px"}}>
                    <button>Submit</button>
                </div>
                
            </div>


        </div>
    )
}
export default Feedback;