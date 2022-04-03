import React from 'react';

import './SectionBest.scss';
import './../../sassStyles/base/_typography.scss'

import CardWhiteFull from './../Cards/Card-white-full';
import CardBlack from './../Cards/Card-black';
import CardWhite from './../Cards/Card-white';
import { Link } from 'react-router-dom';

function SectionBest() {
  return (
    <div className="section-best">
      <div className="section-best__head">
        <h2 className="section-best__title heading-secondary">The Best of MUNs</h2>
        <p className="section-best__subtitle">
          Explore the most popular MUNs from all over the country
        </p>
      </div>
      <div className="section-best__body">
      
        <CardWhiteFull></CardWhiteFull>
        <CardWhite></CardWhite>
        <CardBlack></CardBlack>
      </div>
    </div>
  );
}

export default SectionBest;
