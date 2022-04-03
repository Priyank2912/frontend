import React from 'react';

import './navbar.scss';
import logo from '../../../images/svg/logo.svg';
import searchIcon from '../../../images/svg/search-icon.svg';
import bagIcon from '../../../images/svg/bag-icon.svg';
import profileIcon from '../../../images/svg/profile-icon.svg';

import ProfileBox from './../../ProfileBox/ProfileBox';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="nav">
          <div className="nav-left">
            <li className="nav-item">
              <img src={logo} className="logo" alt="logo" />
            </li>
          </div>
          <div className="nav-right">
            <li className="nav-item">
              <input type="text" placeholder="Type Something..." className="search-box"/>
            </li>
            <li className="nav-item">
              <a href="#">
                <img src={searchIcon} className="nav-icon" alt="search-icon" />
              </a>
            </li>
            <li className="nav-item">
              <Link to="/briefcase">
                <img src={bagIcon} className="nav-icon" alt="bag-icon" />
              </Link>
            </li>
            <li className="nav-item signIn">
              <button className="sign-in btn-nav">
                <img
                  src={profileIcon}
                  className=" sign-in__icon"
                  alt="profile"
                />
                <span className="sign-in__text">Sign In</span>
              </button>
              <div className="profilebox">
                <ProfileBox></ProfileBox>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
