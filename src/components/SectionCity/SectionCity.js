import React from 'react';

import './SectionCity.scss';
import './../../sassStyles/base/_typography.scss'

import locationIcon from './../../images/svg/akar-icons_location-small.svg';

import CardWhiteFull from './../Cards/Card-white-full';
import CardBlack from './../Cards/Card-black';
import CardWhite from './../Cards/Card-white';

function SectionCity(Props) {
  return (
    <div className="section-city">
      <div className="section-city__top">
        <div className="section-city__left">
          <h2 className="section-city__title heading-secondary">In your City</h2>
          <p className="section-city__subtitle">Explore MUNs around you </p>
        </div>
        <div className="section-city__right">
          <div className="section-city__dropdown-box">
            <div className="section-city__dropdown--icon-box">
              <img
                src={locationIcon}
                alt=""
                className="section-city__dropdown--icon"
              />
            </div>
            <select className="section-city__dropdown">
              <option selected="selected">Ahmedabad</option>
              <option>Surat</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>
          <p className="section-city__text">Select a City</p>
        </div>
      </div>
      <div className="section-city__bottom">
      <CardWhiteFull></CardWhiteFull>
        
        <CardWhite></CardWhite>
        <CardBlack></CardBlack>
      </div>
    </div>
  );
}

export default SectionCity;
