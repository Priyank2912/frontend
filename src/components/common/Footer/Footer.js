import React from 'react';

import './Footer.scss';
import logo from '../../../images/svg/logo-blue.svg';
import iconInstagram from '../../../images/svg/insta.svg';
import iconLinkedIn from '../../../images/svg/akar-icons_linkedin-fill.svg';
import IconFacebook from '../../../images/svg/ant-design_facebook-filled.svg';
import iconYoutube from '../../../images/svg/akar-icons_youtube-fill.svg';
import iconTwitter from '../../../images/svg/akar-icons_twitter-fill.svg';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__title">
        <div class="footer__title--front-line"></div>
        <div class="footer__title--logo-box">
          <img src={logo} class="logo" alt="" />
        </div>
        <div class="footer__title--back-line"></div>
      </div>
      <div class="container footer-box">
        <ul class="footer__nav">
          <li class="footer__nav--item">
            <a href="#" class="footer__nav--link">
              Privacy Policy
            </a>
          </li>
          <li class="footer__nav--item">
            <a href="#" class="footer__nav--link">
              Conditions of Use
            </a>
          </li>
          <li class="footer__nav--item">
            <a href="#" class="footer__nav--link">
              About Us
            </a>
          </li>
          <li class="footer__nav--item">
            <a href="#" class="footer__nav--link">
              Help
            </a>
          </li>
        </ul>
        <ul class="footer__icon">
          <li class="footer__icon--item">
            <a href="#" class="footer__icon--link">
              <img src={iconInstagram} alt="" className="footer-link-icon" />
            </a>
          </li>
          <li class="footer__icon--item">
            <a href="#" class="footer__icon--link">
              <img src={iconLinkedIn} alt="" className="footer-link-icon" />
            </a>
          </li>
          <li class="footer__icon--item">
            <a href="#" class="footer__icon--link">
              <img src={IconFacebook} alt="" className="footer-link-icon" />
            </a>
          </li>

          <li class="footer__icon--item">
            <a href="#" class="footer__icon--link">
              <img src={iconYoutube} alt="" className="footer-link-icon" />
            </a>
          </li>
          <li class="footer__icon--item">
            <a href="#" class="footer__icon--link">
              <img src={iconTwitter} alt="" className="footer-link-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
