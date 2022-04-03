
import { useContext } from "react";
import Button from "../../common/button/Button";
import FormField from "../../common/FormField/FormField"
import { PopUpContext } from "../../common/popUp/PopUp";
import LargeIcon from "../../svg/logo/LargeIcon";
import MediumIcon from "../../svg/logo/MediumIcon";
import { FormDataContext } from "../FormContext";
import Login from "../login/Login";
import './signUp.scss';

const SignUp = ()=>{
    const popUp = useContext(PopUpContext);
    const signUpContext = useContext(FormDataContext);
    console.log("err ="+ signUpContext.signUp.email.value.err);
    return(
        <>  
        <form className="signUpContainer next" onSubmit={(e)=>{e.preventDefault()}}>
            <button className="back" onClick={()=>{popUp.showPopUp("small",<Login direction="previous" />);}}>
                back
            </button>
            <div className="logo">
                <MediumIcon />
            </div>


            <FormField type="text" name="fullName" message={signUpContext.signUp.name.value.err} value={signUpContext.signUp.name.value.val} onBlur={(text)=>{}} changeTo={(text)=>{signUpContext.signUp.name.changeTo(text)}} placeholder="Full name"/>
            <FormField type="email" name="email" message={signUpContext.signUp.email.value.err} value={signUpContext.signUp.email.value.val} onBlur={(text)=>{signUpContext.signUp.email.checkError(text)}} changeTo={(text)=>{signUpContext.signUp.email.changeTo(text)}} placeholder="Email Adress"/>
            <FormField type="password" name="Password" message={signUpContext.signUp.password.value.err} value={signUpContext.signUp.password.value.val}  onBlur={(text)=>{signUpContext.signUp.password.checkError(text)}} changeTo={(text)=>{signUpContext.signUp.password.changeTo(text)}} placeholder="Password"/>
            <FormField type="password" name="confirmPassword" message={signUpContext.signUp.confirm.value.err} value={signUpContext.signUp.confirm.value.val} onBlur={(text)=>{signUpContext.signUp.confirm.checkError(text)}} changeTo={(text)=>{signUpContext.signUp.confirm.changeTo(text)}} placeholder="Confirm password"/>
            <div className="passwordCondition container">
                <p>
                    Password should be atleast 6 characters long and should include atleast 1 special character. Ex: @,$,%,&,!.
                </p>
            </div>
            <div className="container temrsCondition">
                <input type="checkbox" checked={signUpContext.signUp.termsAndCondition.value} onClick={()=>{signUpContext.signUp.termsAndCondition.changeTo()}} />
                <p>
                    By signing up, you agree to MyNextMUN’s <a>Conditions of Use</a> and <a>Privacy Policy</a>.
                </p>
            </div>
            <Button disabled={!signUpContext.signUp.termsAndCondition.value}>Sign Up</Button>
        </form>

            
        </>
    );
}
export default SignUp;