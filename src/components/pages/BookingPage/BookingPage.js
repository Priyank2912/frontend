import React, { useEffect } from 'react';

import './BookingPage.scss';

import BookingForm from './../../forms/BookingForm/BookingForm';

function BookingPage() {

  useEffect(()=>{
      window.scrollTo({
        top:0,
      })
  },[]);
  return (
    <div className="booking-page-box">
      <div className="container">
        <BookingForm></BookingForm>
      </div>
    </div>
  );
}

export default BookingPage;
