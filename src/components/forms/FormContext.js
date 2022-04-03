import { createContext, useContext,useReducer, useState } from "react";
import {defaultChecker,emailChecker,PasswordChecker,confirmPassWord} from './formFieldChecker';
export const FormDataContext = createContext();
const initialState = {val:"",error:""};



//----------------------**************************--------------------
const loginEmailReducer = (previousVal,action)=>{
    return emailChecker(action,previousVal);
}
const loginPasswordReducer = (previousVal,action)=>{   
    return defaultChecker(action,previousVal);
}

//----------------------**************************--------------------
const signUpEmailReducer = (previousVal,action)=>{
    return emailChecker(action,previousVal);
}
const signUpnameReducer = (previousVal,action)=>{
    return defaultChecker(action,previousVal);
}
const signUpPasswordReducer = (previousVal,action)=>{
    return PasswordChecker(action,previousVal);
}
const signUpConfirmPasswordReducer = (previousVal,action)=>{
    return confirmPassWord(action,previousVal);
}

//----------------------**************************--------------------
const resetPasswordEmailReducer = (previousVal,action)=>{
    return emailChecker(action,previousVal);
}
const resetPasswordOTPReducer = (previousVal,action)=>{
    return defaultChecker(action,previousVal);
}

//----------------------**************************--------------------
const resetnewPasswordReducer = (previousVal,action)=>{
    return PasswordChecker(action,previousVal);
}
const resetnewConfirmPasswordReducer = (previousVal,action)=>{
    return confirmPassWord(action,previousVal);
}

const FormContext = (Props)=>{

    const [loginEmail,dispatchLoginEmail]=  useReducer(loginEmailReducer,initialState);
    const [loginPassword,dispatchLoginPassword]=  useReducer(loginPasswordReducer,initialState);

    const [signUpname,dispatchsignUpname]=  useReducer(signUpnameReducer,initialState);
    const [signUpEmail,dispatchsignUpEmail]=  useReducer(signUpEmailReducer,initialState);
    const [signUpPassword,dispatchsignUpPassword]=  useReducer(signUpPasswordReducer,initialState);
    const [signUpConfirmPassword,dispatchsignUpConfirmPassword]=  useReducer(signUpConfirmPasswordReducer,initialState);
    const [termsAndCondition,toggleTermsAndCondition] = useState(false);

    const [resetPasswordEmail,dispatchresetPasswordEmail]=  useReducer(resetPasswordEmailReducer,initialState);
    const [resetPasswordOTP,dispatchresetPasswordOTP]=  useReducer(resetPasswordOTPReducer,initialState);
    const [resetnewPassword,dispatchresetnewPassword]=  useReducer(resetnewPasswordReducer,initialState);
    const [resetnewConfirmPassword,dispatchresetnewConfirmPassword]=  useReducer(resetnewConfirmPasswordReducer,initialState);

    const Context = {
        login:{
            email:{
                value:loginEmail,
                changeTo:(text)=>{
                    dispatchLoginEmail({type:"changeTo",val:text});
                },
                checkError:(text)=>{
                    dispatchLoginEmail({type:"checkError",val:text});   
                },
                addError:(err)=>{
                    dispatchLoginEmail({type:"addError",err:err});   
                }
            },
            password:{
                value:loginPassword,
                changeTo:(text)=>{
                    dispatchLoginPassword({type:"changeTo",val:text});
                },
                addError:(err)=>{
                    dispatchLoginPassword({type:"addError",err:err});   
                }
            }
        },
        signUp:{
            name:{
                value:signUpname,
                changeTo:(text)=>{
                    dispatchsignUpname({type:"changeTo",val:text});
                },
                addError:(err)=>{
                    dispatchsignUpname({type:"addError",err:err});
                }
            },
            email:{
                value:signUpEmail,
                changeTo:(text)=>{
                    dispatchsignUpEmail({type:"changeTo",val:text});
                },
                checkError:(text)=>{
                    dispatchsignUpEmail({type:"checkError",val:text});   
                },
                addError:(err)=>{
                    dispatchsignUpEmail({type:"addError",err:err});   
                }
            },
            password:{
                value:signUpPassword,
                changeTo:(text)=>{
                    dispatchsignUpPassword({type:"changeTo",val:text});
                },
                checkError:(text)=>{
                    dispatchsignUpPassword({type:"checkError",val:text});   
                },
                addError:(err)=>{
                    dispatchsignUpPassword({type:"addError",err:err});   
                }
            },
            confirm:{
                value:signUpConfirmPassword,
                changeTo:(text)=>{
                    dispatchsignUpConfirmPassword({type:"changeTo",val:text});
                },
                checkError:(text)=>{
                    dispatchsignUpConfirmPassword({type:"checkError",val:text,passVal:signUpPassword});   
                },
                addError:(err)=>{
                    dispatchsignUpConfirmPassword({type:"addError",err:err});   
                }
            },
            termsAndCondition:{
                value:termsAndCondition,
                changeTo:()=>{
                    toggleTermsAndCondition(!termsAndCondition);
                }
            }
        },
        resetPassword:{
            email:{
                value:resetPasswordEmail,
                changeTo:(text)=>{
                    dispatchresetPasswordEmail({type:"changeTo",val:text});
                },
                checkError:(text)=>{
                    dispatchresetPasswordEmail({type:"checkError",val:text});   
                },
                addError:(err)=>{
                    dispatchresetPasswordEmail({type:"addError",err:err});   
                }
            },
            OTP:{
                value:resetPasswordOTP,
                changeTo:(text)=>{
                    dispatchresetPasswordOTP({type:"changeTo",val:text});
                },
                addError:(err)=>{
                    dispatchresetPasswordOTP({type:"addError",err:err});
                }
            },
            password:{
                value:resetnewPassword,
                changeTo:(text)=>{
                    dispatchresetnewPassword({type:"changeTo",val:text});
                },
                checkError:(text)=>{
                    dispatchresetnewPassword({type:"checkError",val:text});   
                },
                addError:(err)=>{
                    dispatchresetnewPassword({type:"addError",err:err});   
                }
            },
            confirm:{
                value:resetnewConfirmPassword,
                changeTo:(text)=>{
                    dispatchresetnewConfirmPassword({type:"changeTo",val:text});
                },
                checkError:(text)=>{
                    dispatchresetnewConfirmPassword({type:"checkError",val:text,passVal:signUpPassword});   
                },
                addError:(err)=>{
                    dispatchresetnewConfirmPassword({type:"addError",err:err});   
                }
            }
        }
    }
    return(
        <FormDataContext.Provider value={Context}>
            {Props.children}
        </FormDataContext.Provider>
    );
}
export default FormContext;