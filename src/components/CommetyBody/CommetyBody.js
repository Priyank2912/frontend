import React from 'react';

import './CommetyBody.scss';
import img from './../../images/WAS.png';

function CommetyBody() {
  return (
    <div className="commety-body">
      <div className="commety-body__left">
        <div className="commety-body__img-box">
          <img src={img} alt="" className="commety-body__img" />
        </div>
        <h3 className="commety-body__title">United Nations Security Council</h3>
        <div className="commety-body__description-box">
          <p className="commety-body__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id
            fringilla lectus mauris. Ultricies faucibus sit eget mauris at.
            Velit orci, mauris at et nulla pellentesque amet, sollicitudin.
            Vestibulum suspendisse augue et nec vel, nam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Faucibus id fringilla lectus
            mauris.
          </p>
          <div className="commety-body__description-gap">aaaa</div>
          <p className="commety-body__description">
            Ultricies faucibus sit eget mauris at. Velit orci, mauris at et
            nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue
            et nec vel, nam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit
            eget mauris at.
          </p>
        </div>
      </div>
      <div className="commety-body__right">
        <div className="commety-body__agendas-box">
          <div className="commety-body__agendas-title">Agendas</div>
          <ul className="commety-body__agendas">
            <li className="commety-body__agendas-item">
              - Economic Policies of Switzerland
            </li>
            <li className="commety-body__agendas-item">
              - Economic Policies of Switzerland
            </li>
          </ul>
        </div>
        <div className="commety-body__level-box">
          <div className="commety-body__level-title">Level</div>
          <div className="commety-body__level">Advanced</div>
        </div>
        <div className="commety-body__vacancy-box">
          <div className="commety-body__vacancy-title">Vacancy</div>
          <div className="commety-body__vacancy">
            <span className="commety-body__vacancy-number">23</span>{' '}
            <span>Seats Remaining*</span>
          </div>
          <div className="commety-body__vacancy-text">
            *Country allocation would be communicated via email.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommetyBody;
