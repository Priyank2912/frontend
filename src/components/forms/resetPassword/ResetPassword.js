
import { useContext, useEffect } from "react";
import Button from "../../common/button/Button";
import FormField from "../../common/FormField/FormField"
import { PopUpContext } from "../../common/popUp/PopUp";
import LargeIcon from "../../svg/logo/LargeIcon";
import MediumIcon from "../../svg/logo/MediumIcon";
import { FormDataContext } from "../FormContext";
import Login from "../login/Login";
import './ResetPassword.scss';
import ResetPasswordOTP from "./ResetPasswordOTP";
// import MediumIcon from "../../svg/logo/MediumIcon"

const ResetPassword = (Props)=>{
    
    const popUp = useContext(PopUpContext);
    const resetPasswordContext = useContext(FormDataContext).resetPassword;
    return(
        <>  
        <form className={Props.direction=="previous"?"previous resetPassword":"next resetPassword"} onSubmit={(e)=>{e.preventDefault()}}>
            <button className="back" onClick={()=>{popUp.showPopUp("small",<Login direction="previous" />);}}>
                back
            </button>
            <div className="logo">
                <MediumIcon />
            </div>
            <div className="container">
                <h4>To reset your password, follow these steps.</h4>
                <div className="steps">
                    <div className="stepNo">
                        1
                    </div>
                    <div className="stepcontent">
                        <p>
                            Enter the email address associated with your MyNextMUN account.
                        </p>
                    </div>
                    <div className="direction">
                        <div className="line"></div>
                        <div className="stepNo">
                            2
                        </div>
                    </div>
                    <div className="stepcontent">
                        <p>
                            An autogenerated link and OTP will be sent to the registered email address.
                        </p>
                    </div>
                    <div className="direction">
                        <div className="line"></div>
                        <div className="stepNo">
                            3
                        </div>
                    </div>
                    <div className="stepcontent">
                        <p>
                            Click on the link and use the OTP to reset your password.
                        </p>
                    </div>

                </div>
            </div>
            
            <FormField type="email" message={resetPasswordContext.email.value.err}  name="email" value={resetPasswordContext.email.value.val} onBlur={(text)=>{resetPasswordContext.email.checkError(text)}} changeTo={(text)=>{resetPasswordContext.email.changeTo(text)}} placeholder="Email Adress"/>
            <div className="container emailRegisteredNotice">
                <p>Please make sure you input an email address that has an existing MyNextMUN account.</p>
            </div>
            <Button onClick={(e)=>{popUp.showPopUp("small",<ResetPasswordOTP />);}}>Send OTP</Button>
        </form>

            
        </>
    );
}
export default ResetPassword;