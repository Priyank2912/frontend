import React from 'react';

import './SectionRecipt.scss';
import './../../sassStyles/base/_typography.scss';
import img from './../../images/briefcase.png';
import AmountBoxRec from '../AmountBox/AmountBoxRec';

function SectionRecipt() {
  return (
    <div className="section-recipt-box">
      <h2 className="section-recipt__title heading-secondary">Receipt</h2>
      <div className="section-recipt">
        <div className="section-recipt__left">
          <div className="section-recipt__img-box">
            <img src={img} alt="" className="section-recipt__img" />
          </div>
          <p className="section-recipt__WAS">World Archive Stimulation</p>
          <p className="section-recipt__name">U.N. Human Rights Commission</p>
          <p className="section-recipt__date">12 -13 -14 October 2021</p>
        </div>
        <div className="section-recipt__middle">
          <div className="section-recipt__confirmed">Booking Confirmed.</div>
          <div className="section-recipt__details">
            <div className="section-recipt__details-left">
              <div className="section-recipt__details-item--left">
                recipt ID
              </div>
              <div className="section-recipt__details-item--left">Name</div>

              <div className="section-recipt__details-item--left">
                Contact Number
              </div>

              <div className="section-recipt__details-item--left">
                Email Address
              </div>
              <div className="section-recipt__details-item--left">
                Name of the MUN
              </div>
              <div className="section-recipt__details-item--left">
                Committee
              </div>
              <div className="section-recipt__details-item--left">
                Conference Date
              </div>
              <div className="section-recipt__details-item--left  section-recipt__details-venue">
                Conference Venue
              </div>
              <div className="section-recipt__details-item--left">
                Payment Mode
              </div>
            </div>
            <div className="section-recipt__details-right">
              <div className="section-recipt__details-item--right section-recipt__details-id">
                YAMUN20213452
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-name">
                Alex Jacob
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-number">
                9601133475
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-email">
                example.info@gmail.com
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-mun">
                World Archive Simulation
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-committee">
                United Nations Human Rights Council
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-date">
                01 01 1995
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-venue">
                4572 Wilson Avenue, Garland, <br /> Ahmedebad, India <br />{' '}
                600420
              </div>
              <div className="section-recipt__details-item--right section-recipt__details-payment">
                Paytm
              </div>
            </div>
          </div>
        </div>
        <div className="section-recipt__right">
          <AmountBoxRec></AmountBoxRec>
        </div>
      </div>
    </div>
  );
}

export default SectionRecipt;
