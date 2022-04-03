import React from 'react';

import './Card.scss';
import share from './../../images/svg/Share-white.svg';
import { Link } from 'react-router-dom';

function CardExplore() {
  return (
    <div className="card-explore">
      <div className="card-explore__body">
        <button className="card-explore__share-box btn">
          <img src={share} alt="" className="card-explore__share"  />
        </button>
      </div>
      <Link to="/booking">
      <div className="card-explore__footer">
        <p className="card-explore__title">
          United Nations Human Rights Council
        </p>
      </div>
      </Link>
    </div>
  );
}

export default CardExplore;
