import React from 'react';

import './SectionSpecial.scss';
import './../../sassStyles/base/_typography.scss';

import image from './../../images/special.png';

function SectionSpecial() {
  return (
    <div className="section-special">
      <div className="section-special__head">
        <h2 className="section-special__title heading-secondary">
          Become a Premium Delegate
        </h2>
        <p className="section-special__subtitle">
          Enjoy special services for a unique experience
        </p>
      </div>
      <div className="section-special__body">
        <div className="section-special__img-box">
          <img src={image} alt="" className="section-special__img" />
        </div>
        <div className="section-special__content-box">
          <p className="section-special__content ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id
            fringilla lectus mauris. Ultricies faucibus sit eget mauris at.
            Velit orci, mauris at et nulla pellentesque amet, sollicitudin.
            Vestibulum suspendisse augue et nec vel, nam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Faucibus id fringilla lectus
            mauris.
          </p>
          <p className="section-special__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id
            fringilla lectus mauris. Ultricies faucibus sit eget mauris at.
            Velit orci, mauris at et nulla pellentesque amet, sollicitudin.
            Vestibulum suspendisse augue et nec vel, nam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Faucibus id fringilla lectus
            mauris.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionSpecial;
