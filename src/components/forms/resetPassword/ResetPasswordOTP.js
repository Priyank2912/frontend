
import { useContext, useEffect } from "react";
import Button from "../../common/button/Button";
import FormField from "../../common/FormField/FormField"
import { PopUpContext } from "../../common/popUp/PopUp";

import MediumIcon from "../../svg/logo/MediumIcon";
import { FormDataContext } from "../FormContext";

import NewPassword from "./NewPassword";
import ResetPassword from "./ResetPassword";
import './ResetPassword.scss';
// import MediumIcon from "../../svg/logo/MediumIcon"
const OTPError = "OTP is Invalid"; 
const ResetPasswordOTP = (Props)=>{
    
    const popUp = useContext(PopUpContext);
    const resetPasswordContext = useContext(FormDataContext).resetPassword;
  
    return(
        <>  
        <form className={Props.direction=="previous"?"previous resetPassword":"next resetPassword"} onSubmit={(e)=>{e.preventDefault()}}>
            <button className="back" onClick={()=>{popUp.showPopUp("small",<ResetPassword direction="previous"/>);}}>
                back
            </button>
            <div className="logo">
                <MediumIcon />
            </div>
            {/* <div className="container">
                <h3>Create a new password for your MyNext resetPasswordMUN account.</h3>
            </div> */}
            
            <label>Enter the OTP sent to you via email</label>
            <FormField type="number" message={resetPasswordContext.OTP.value.err}  name="OTP" value={resetPasswordContext.OTP.value.val} onBlur={(text)=>{}} changeTo={(text)=>{resetPasswordContext.OTP.changeTo(text)}} placeholder="Enter OTP"/>
            <p style={{marginBottom:"1rem"}}></p>
            <Button onClick={()=>{
                    if(resetPasswordContext.OTP.value.val==="123456"){
                        popUp.showPopUp("small",<NewPassword />);
                    }else{
                        resetPasswordContext.OTP.addError(OTPError);
                    }
                }
            }>Verify</Button>
            <div className="container emailResend">
                <p>Did not receive an email?</p>
                <p>We can Always <a>resend the email</a> to you</p>
            </div>
        </form>

            
        </>
    );
}
export default ResetPasswordOTP;