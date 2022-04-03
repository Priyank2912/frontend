const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regExpressionForSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const emailMessage = "Please Enter Valid Email";
const passwordLengthError = "Password should have atlist 6 character";
const passwordSpecialCharError = "Password should have atlist 1 special character";
const passWordNotMatchError = "Password does not match";
export const defaultChecker = (action,previousVal)=>{
    if(action.type==="changeTo"){
        const val = action.val;
        return {val:val,err:""};
    }
    if(action.type==="addError"){
        return {val:previousVal.val,err:action.err}
    }
}
export const emailChecker = (action,prevVal)=>{
    
    if(action.type==="changeTo"){
        const val = action.val;
        return {val:val,err:""};
    }
    if(action.type==="checkError"){
        const val = action.val;
        if(!emailExpression.test(val)){
            return {val:val,err:emailMessage}
        }else{
            return {val:val,err:""}
        }
    }
    if(action.type==="addError"){
        return {val:prevVal.val,err:action.err}
    }
}
export const PasswordChecker = (action,previousVal)=>{    
    if(action.type==="changeTo"){
        const val = action.val;
        return {val:val,err:""};
    }
    if(action.type==="checkError"){
        const val = action.val;
        if(val.length<6){
            return {val:previousVal.val,err:passwordLengthError};
        }
        if(!regExpressionForSpecialChar.test(val)){
            return {val:previousVal.val,err:passwordSpecialCharError};
        }
        return {val:previousVal.val,err:""};
    }
    if(action.type==="addError"){
        return {val:previousVal.val,err:action.err};
    }
}
export const confirmPassWord = (action,previousVal)=>{
    if(action.type==="changeTo"){
        const val = action.val;
        return {val:val,err:""};
    }
    if(action.type==="checkError"){
        const confirmPassword = action.val;
        const password = action.passVal.val;
        console.log("confirm : "+confirmPassword);
        console.log("pass : "+password);
        if(confirmPassword!==password){
            return {val:confirmPassword,err:passWordNotMatchError}
        }else{
            return {val:confirmPassword,err:""}
        }
    }
    if(action.type==="addError"){
        return {val:previousVal.val,err:action.err};
    }
}
