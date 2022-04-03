import React from 'react';
import { useHistory } from 'react-router';

import './AmountBox.scss';

function AmountBoxRec() {
  const history = useHistory();
  return (
    <div className="amount-box">
      <div className="amount-box-top">
        <h2 className="amount-box-total">
          Total Amount{' '}
          <span className="amount-box-price total-price">INR 4000</span>
        </h2>
        <p className="amount-box-mun-cost">
          Cost of MUN <span className="amount-box-price">INR 4000</span>
        </p>
        <p className="amount-box-accomodation">
          Accommodation charges{' '}
          <span className="amount-box-price">INR 4000</span>
        </p>
        <p className="amount-box-premium">
          Premium charges<span className="amount-box-price">INR 4000</span>
        </p>
        <p className="amount-box-taxes">
          Taxes<span className="amount-box-price">INR 4000</span>
        </p>
      </div>
      <div className="amount-box-bottom">
        <button className="btn btn-amount-box">Download Invoice</button>
        <button className="btn btn-amount-box" onClick={()=>{history.replace('/')}}>Back to Home</button>
      </div>
    </div>
  );
}

export default AmountBoxRec;
