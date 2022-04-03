import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import PopUp from './components/common/popUp/PopUp';
import FormContext from './components/forms/FormContext';

ReactDOM.render(
  <React.Fragment>
  <FormContext>
  <PopUp>
      <App />
  </PopUp>
  </FormContext>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
