import React from 'react';

import './SectionExplore.scss';
import './../../sassStyles/base/_typography.scss';

import CardExplore from './../Cards/Card-explore';

function SectionExplore() {
  return (
    <div className="section-explore">
      <div className="container">
        <div className="section-explore__head">
          <h2 className="section-explore__title heading-secondary">
            Explore Committees
          </h2>
          <p className="section-explore__subtitle">
            Explore popular committees offered by MUNs all over the country
          </p>
        </div>
        <div className="section-explore__body">
          <CardExplore></CardExplore>
          <CardExplore></CardExplore>
          <CardExplore></CardExplore>
          <CardExplore></CardExplore>
          <CardExplore></CardExplore>
          <CardExplore></CardExplore>
        </div>
      </div>
    </div>
  );
}

export default SectionExplore;
