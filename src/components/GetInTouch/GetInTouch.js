import React from 'react';

import './GetInTouch.scss';
import iconInsta from './../../images/svg/insta-blue.svg';
import iconFacebook from './../../images/svg/facebook-filled-blue.svg';
import iconMail from './../../images/svg/line-md_email.svg'
import iconWeb from './../../images/svg/mdi_web.svg';   

function GetInTouch() {
  return (
    <div className="touch">
      <h3 className="touch__title heading-tertiary">Get in touch with the organizers</h3>
      <ul className="touch__link-box">
        <li className="touch__link-item">
          <img src={iconInsta} alt="" className="touch__link-icon" />
          <a href="#" className="touch__link">@w.a.s._2021</a>
        </li>
        <li className="touch__link-item">
          <img src={iconFacebook} alt="" className="touch__link-icon" />
          <a href="#" className="touch__link">WorldArchiveSimulation2021 </a>
        </li>
        <li className="touch__link-item">
          <img src={iconWeb} alt="" className="touch__link-icon" />
          <a href="#" className="touch__link">www.wasahmedabad.com</a>
        </li>
        <li className="touch__link-item">
          <img src={iconMail} alt="" className="touch__link-icon" />
          <a href="#" className="touch__link">queries@ilmun.com</a>
        </li>
      </ul>
    </div>
  );
}

export default GetInTouch;
