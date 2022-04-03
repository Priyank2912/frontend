import React from 'react';

import './Briefcase.scss';
import image from './../../images/briefcase.png';

function Briefcase() {
  return (
    <div className="briefcase">
      <div className="briefcase__img-box">
        <img src={image} alt="" className="briefcase__img" />
      </div>
      <div className="briefcase__details">
        <div className="briefcase__details-left">
          <div className="briefcase__details-item--left">Name of the MUN</div>
          <div className="briefcase__details-item--left">Date</div>
          <div className="briefcase__details-item--left">Committee</div>
          <div className="briefcase__details-item--left">Conference Venue</div>
        </div>
        <div className="briefcase__details-right">
          <div className="briefcase__details-item--right briefcase__details-name">
            World Archive Simulation
          </div>
          <div className="briefcase__details-item--right briefcase__details-date">
            21 01 2021
          </div>
          <div className="briefcase__details-item--right briefcase__details-committee">
            United Nations Human Rights Council
          </div>
          <div className="briefcase__details-item--right briefcase__details-venue">
            Ahmedebad
          </div>
        </div>
      </div>
      <button className="btn btn-briefcase">Proceed to Checkout</button>
    </div>
  );
}

export default Briefcase;
