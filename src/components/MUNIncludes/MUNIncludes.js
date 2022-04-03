import React from 'react';

import './MUNIncludes.scss';

import ScrollButton from './../ScrollButton/ScrollButton';
function MUNIncludes() {
  return (
    <div className="MUNIncludes">
      <div className="MUNIncludes__price"> INR 4000</div>
      <div className="MUNIncludes__subtitle">Includes </div>
      <div className="MUNIncludes__features">
        <span className="MUNIncludes__features-item">Breakfast</span>
        <span className="MUNIncludes__features-line"></span>
        <span className="MUNIncludes__features-item">Lunch</span>
        <span className="MUNIncludes__features-line"></span>
        <span className="MUNIncludes__features-item">High Tea</span>
      </div>
      <div className="MUNIncludes__text">
        All meals along with the delegate kit will be provided at the venue of
        the event.
      </div>
      <div className="MUNIncludes__accomodation">
        <div className="MUNIncludes__accomodation-title">
          Accomodation Package available at INR 8000
        </div>
        <div className="MUNIncludes__accomodation-subtitle">
          For further details on accomodation:{' '}
        </div>
        <div className="MUNIncludes__accomodation-link-box">
          <a href="#" className="MUNIncludes__accomodation-link">
            Contact the organizer
          </a>
        </div>
      </div>
      <div className="MUNIncludes__application">
        <div className="MUNIncludes__application-title">
          E.B. Application Window
        </div>
        <div className="MUNIncludes__application-date">
          September 14 - 15, 2021
        </div>
        <p className="MUNIncludes__application-text">
          For further details on E.B.:
        </p>
        <a href="#" className="MUNIncludes__application-link">
          Contact the organizer
        </a>
      </div>

      <div className="MUNIncludes__btn-box">
        <ScrollButton text="Select Committee" arrow="down"></ScrollButton>
      </div>
    </div>
  );
}

export default MUNIncludes;
