import React from 'react';

import './MUNTimer.scss';

// import image from './../../images/WAS.png';

function MUNTimer() {
  return (
    <div className="MUNTimer">
      <h2 className="MUNTimer__title">Priority booking closes in</h2>
      <div className="MUNTimer__loading">
        <div className="MUNTimer__loading-fill"></div>
      </div>
      <div className="MUNTimer__time">
        <span className="MUNTimer__time-item">03</span>
        <span className="MUNTimer__time-item">:</span>
        <span className="MUNTimer__time-item">09</span>
        <span className="MUNTimer__time-item">:</span>
        <span className="MUNTimer__time-item">11</span>
        <span className="MUNTimer__time-item">:</span>
        <span className="MUNTimer__time-item">10</span>
      </div>
      <div className="MUNTimer__units">
        <span className="MUNTimer__units-days">Days</span>
        <span className="MUNTimer__units-hours">Hours</span>
        <span className="MUNTimer__units-minutes">Minutes</span>
        <span className="MUNTimer__units-seconds">Seconds</span>
      </div>
      <p className="MUNTimer__text">
        *Priority registration customers will enjoy &nbsp;
        <a href="#" className="MUNTimer__link">
          added benefits
        </a>
        &nbsp; WITHOUT any added costs.
      </p>
    </div>
  );
}

export default MUNTimer;
