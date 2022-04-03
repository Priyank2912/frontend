import React from 'react';
import './Card.scss';

import share from './../../images/svg/Share-white.svg';
import MUNlogo from './../../images/svg/MODELUN.svg';
import { Link } from 'react-router-dom';

function CardBlack() {
  return (
    <div class="card-black">
      <div class="card-black__head">
        <button class="btn">
          <img src={share} alt="" class="share-icon" />
        </button>
      </div>
      <Link to="/mun">
      <div class="card-black__main">
        <div class="card-black__main--logo-box">
          <img src={MUNlogo} alt="" class="card-black__main--logo" />
        </div>
        <p class="card-black__main--title">Ed M.U.N.</p>
        <p class="card-black__main--location">Mumbai</p>
      </div>
      <div class="card-black__footer">
        <p class="card-black__footer--Date">
          <span class="card-black__footer--num">10-13</span> October 2021
        </p>
      </div>
      </Link>
    </div>
  );
}

export default CardBlack;
