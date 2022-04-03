import React from 'react';
import './Card.scss';

import share from './../../images/svg/Share-white.svg';
import MUNlogo from './../../images/svg/EdMUN.svg';
import { Link } from 'react-router-dom';

function CardWhite() {
  return (
    <div class="card-white">
      <div class="card-white__head">
        <button class="btn">
          <img src={share} alt="" class="share-icon" />
        </button>
      </div>
      <Link to="/mun">
      <div class="card-white__main">
        <div class="card-white__main--logo-box">
          <img src={MUNlogo} alt="" class="card-white__main--logo" />
        </div>
        <p class="card-white__main--title">Ed M.U.N.</p>
        <p class="card-white__main--location">Mumbai</p>
      </div>
      <div class="card-white__footer">
        <p class="card-white__footer--Date">
          <span class="card-white__footer--num">10-13</span> October 2021
        </p>
      </div>
      </Link>
    </div>
  );
}

export default CardWhite;
