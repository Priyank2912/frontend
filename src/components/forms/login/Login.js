import { useContext, useState } from 'react';
import { sendPostData } from '../../../fetchApi/sendPostData';
import Button from '../../common/button/Button';
import FormField from '../../common/FormField/FormField';
import { PopUpContext } from '../../common/popUp/PopUp';
import LargeIcon from '../../svg/logo/LargeIcon';
import { FormDataContext } from '../FormContext';
import ResetPassword from '../resetPassword/ResetPassword';
import SignUp from '../signup/signUp';
import './Login.scss';
const loginAPIUrl = '';
// import MediumIcon from "../../svg/logo/MediumIcon"

const Login = (Props) => {
  const loginData = useContext(FormDataContext).login;
  const [loading, toggleLoading] = useState(false);
  const popUp = useContext(PopUpContext);
  return (
    <form>
      <form
        className={
          Props.direction == 'previous'
            ? 'previous loginContainer'
            : 'loginContainer'
        }
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="logo">
          <LargeIcon />
        </div>
        <FormField
          type="text"
          onBlur={(text) => {
            loginData.email.checkError(text);
          }}
          message={loginData.email.value.err}
          name="emial"
          value={loginData.email.value.val}
          changeTo={(text) => {
            loginData.email.changeTo(text);
          }}
          placeholder="Email Adress"
        />
        <FormField
          type="password"
          onBlur={() => {}}
          value={loginData.password.value.val}
          changeTo={(text) => {
            loginData.password.changeTo(text);
          }}
          placeholder="Password"
        />

        <div className="forgetPassword">
          <a
            onClick={() => {
              popUp.showPopUp('small', <ResetPassword />);
            }}
          >
            Forgot Password?
          </a>
        </div>
        <Button
          disabled={loading}
          onClick={(e) => {
            if (
              loginData.email.value.err == '' &&
              loginData.password.value.err == ''
            ) {
              toggleLoading(true);
              alert('hmm');
              sendPostData(
                loginAPIUrl,
                {
                  email: loginData.email.value.val,
                  password: loginData.password.value.val,
                },
                (res) => {
                  if (res.status == true) {
                    toggleLoading(false);
                    popUp.closePopUp();
                  } else {
                    const errType = res.errType;
                    if (errType == 'email') {
                      loginData.email.addError(res.message);
                    } else if (errType == 'password') {
                      loginData.password.addError(res.message);
                    }
                    toggleLoading(false);
                  }
                }
              );

              toggleLoading(false);
            } else {
              alert('hure');
            }
          }}
        >
          Log In
        </Button>

        <div className="signUpOption">
          <p>
            New to MyNextMUN?{' '}
            <a
              onClick={() => {
                popUp.showPopUp('small', <SignUp />);
              }}
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </form>
  );
};
export default Login;
