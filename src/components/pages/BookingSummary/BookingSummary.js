import React, { useEffect } from 'react';

import './BookingSummary.scss';
import SectionBooking from './../../SectionBooking/SectionBooking';

function BookingSummary() {
  
  useEffect(()=>{
    window.scrollTo({
      top:0,
    })
},[]);

  return (
    <div className="booking-summary">
      <div className="container">
        <SectionBooking></SectionBooking>
      </div>
    </div>
  );
}

export default BookingSummary;
