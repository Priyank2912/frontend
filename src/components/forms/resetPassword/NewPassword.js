
import { useContext, useEffect } from "react";
import Button from "../../common/button/Button";
import FormField from "../../common/FormField/FormField"
import { PopUpContext } from "../../common/popUp/PopUp";
import MediumIcon from "../../svg/logo/MediumIcon";
import { FormDataContext } from "../FormContext";

import './ResetPassword.scss';
import ResetPasswordOTP from "./ResetPasswordOTP";
// import MediumIcon from "../../svg/logo/MediumIcon"

const NewPassword = (Props)=>{
    
    const popUp = useContext(PopUpContext);
    const resetPasswordContext = useContext(FormDataContext).resetPassword;
  
    return(
        <>  
        <form className={Props.direction=="previous"?"previous resetPassword":"next resetPassword"} onSubmit={(e)=>{e.preventDefault()}}>
            <button className="back" onClick={()=>{popUp.showPopUp("small",<ResetPasswordOTP direction="previous" />);}}>
                back
            </button>
            <div className="logo">
                <MediumIcon />
            </div>
            <div className="container">
                <h3>Create a new password for your MyNextMUN account.</h3>
            </div>
            <FormField type="password" message={resetPasswordContext.password.value.err} name="password" value={resetPasswordContext.password.value.val} onBlur={(text)=>{resetPasswordContext.password.checkError(text)}} changeTo={(text)=>{resetPasswordContext.password.changeTo(text)}} placeholder="Enter new password"/>
            <FormField type="password" message={resetPasswordContext.confirm.value.err} name="Confirmpassword" value={resetPasswordContext.confirm.value.val} onBlur={(text)=>{resetPasswordContext.confirm.checkError(text)}} changeTo={(text)=>{resetPasswordContext.confirm.changeTo(text)}} placeholder="Confirm new password"/>
            <div className="passwordCondition container">
                <p>
                    Password should be atleast 6 characters long and should include atleast 1 special character. Ex: @,$,%,&,!.
                </p>
            </div>
            <p style={{marginBottom:"1rem"}}></p>
            <Button>Create</Button>
            
        </form>

            
        </>
    );
}
export default NewPassword;