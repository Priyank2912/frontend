import React from 'react';

import './SectionBooking.scss';
import './../../sassStyles/base/_typography.scss';

import img from './../../images/briefcase.png';

import AmountBox from '../AmountBox/AmountBox';

function SectionBooking() {
  return (
    <div className="section-booking-box">
      <h2 className="section-booking__title heading-secondary">
        Booking Summary
      </h2>
      <div className="section-booking">
        <div className="section-booking__left">
          <div className="section-booking__img-box">
            <img src={img} alt="" className="section-booking__img" />
          </div>
          <p className="section-booking__WAS">World Archive Stimulation</p>
          <p className="section-booking__name">U.N. Human Rights Commission</p>
          <p className="section-booking__date">12 -13 -14 October 2021</p>
        </div>
        <div className="section-booking__middle">
          <div className="section-booking__details">
            <div className="section-booking__details-left">
              <div className="section-booking__details-item--left">Name</div>
              <div className="section-booking__details-item--left">
                Date of Birth
              </div>
              <div className="section-booking__details-item--left">Age</div>
              <div className="section-booking__details-item--left">
                Institution
              </div>
              <div className="section-booking__details-item--left">City</div>
              <div className="section-booking__details-item--left">
                Contact Number
              </div>
              <div className="section-booking__details-item--left">
                Email Address
              </div>
              <div className="section-booking__details-item--left">
                Food Preference
              </div>
              <div className="section-booking__details-item--left">
                Accomodation
              </div>
              <div className="section-booking__details-item--left">
                Premium Availed
              </div>
              <div className="section-booking__details-item--left">
                Conference Venue
              </div>
            </div>
            <div className="section-booking__details-right">
              <div className="section-booking__details-item--right section-booking__details-name">
                Alex Jacob
              </div>
              <div className="section-booking__details-item--right section-booking__details-date">
                01 01 1995
              </div>
              <div className="section-booking__details-item--right section-booking__details-age">
                26
              </div>
              <div className="section-booking__details-item--right section-booking__details-institution">
                Centre for Environmental Planning and Technology
              </div>
              <div className="section-booking__details-item--right section-booking__details-city">
                Chennai
              </div>
              <div className="section-booking__details-item--right section-booking__details-number">
                9601133475
              </div>
              <div className="section-booking__details-item--right section-booking__details-email">
                example.info@gmail.com
              </div>
              <div className="section-booking__details-item--right section-booking__details-food">
                Jain
              </div>
              <div className="section-booking__details-item--right section-booking__details-accomodation">
                Yes
              </div>
              <div className="section-booking__details-item--right section-booking__details-premium">
                Yes
              </div>
              <div className="section-booking__details-item--right section-booking__details-venue">
                4572 Wilson Avenue, Garland, <br /> Ahmedebad, India <br />{' '}
                600420
              </div>
            </div>
          </div>
        </div>
        <div className="section-booking__right">
          <AmountBox></AmountBox>
        </div>
      </div>
    </div>
  );
}

export default SectionBooking;
