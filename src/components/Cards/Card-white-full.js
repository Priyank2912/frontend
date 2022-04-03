import React from 'react';
import './Card.scss';

import share from './../../images/svg/Share-blue.svg';
import MUNlogo from './../../images/svg/MMUN.svg';
import { Link } from 'react-router-dom';

function CardWhiteFull() {
  return (
    <div class="card-white-full">
      <div class="card-white-full__head">
        <button class="btn">
          <img src={share} alt="" class="share-icon" />
        </button>
      </div>
      <Link to="/mun">
      <div class="card-white-full__main">
        <div class="card-white-full__main--logo-box">
          <img src={MUNlogo} alt="" class="card-white-full__main--logo" />
        </div>
        <p class="card-white-full__main--title">Ed M.U.N.</p>
        <p class="card-white-full__main--location">Mumbai</p>
      </div>
      <div class="card-white-full__footer">
        <p class="card-white-full__footer--Date">
          <span class="card-white-full__footer--num">10-13</span> October 2021
        </p>
      </div>
      </Link>
    </div>
  );
}

export default CardWhiteFull;
