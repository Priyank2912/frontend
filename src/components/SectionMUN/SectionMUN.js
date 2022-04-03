import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './SectionMUN.scss';
import './../../sassStyles/base/_typography.scss';
import logo from './../../images/svg/logo.svg';

import MUNMain from './../MUNmain/MUNmain';
import MUNTimer from './../MUNTimer/MUNTimer';
import MUNIncludes from './../MUNIncludes/MUNIncludes';

function SectionMUN() {
  return (
    <div className="section-MUN-box">
      <h2 className="section-MUN__title heading-secondary">
        World Archive Stimulation
      </h2>
      <div className="section-MUN">
        <div className="section-MUN-left">
          <MUNMain className="section-MUN-main"></MUNMain>
        </div>
        <div className="section-MUN-right">
          <MUNTimer className="section-MUN-timer"></MUNTimer>
          <MUNIncludes className="section-MUN-includes"></MUNIncludes>
        </div>
        <div className="section-MUN-right--2">
          <MUNTimer className="section-MUN-timer"></MUNTimer>
          <MUNIncludes className="section-MUN-includes"></MUNIncludes>
        </div>
      </div>
    </div>
  );
}

export default SectionMUN;
