import React from 'react';

import './MUNmain.scss';
import './../../sassStyles/base/_typography.scss';

import image from './../../images/WAS.png';
import iconCalander from './../../images/svg/akar-icons_calendar.svg';
import iconVacancy from './../../images/svg/vacancy icon.svg';
import iconClock from './../../images/svg/ion_time-outline.svg';
import iconLocation from './../../images/svg/akar-icons_location-big.svg';
import iconCalenderClock from './../../images/svg/fluent_calendar-clock-24-regular.svg';
import iconShare from './../../images/svg/Share-blue.svg';
import iconDownload from './../../images/svg/akar-icons_arrow-down (1).svg';
import iconBriefcase from './../../images/svg/bag-icon-white.svg';

function MUNmain() {
  return (
    <div className="MUN-main">
      <div className="MUN-main__left">
        <div className="MUN-main__image-box">
          <img src={image} alt="" className="MUN-main__image" />
        </div>
        <div className="MUN-main__description-box">
          <p className="MUN-main__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id
            fringilla lectus mauris. Ultricies faucibus sit eget mauris at.
            Velit orci, mauris at et nulla pellentesque amet, sollicitudin.
            Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk
            kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl
          </p>
          <p className="MUN-main__description">
            Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet.
            Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit
            feugiat eget nunc. Proin et condimentum leo quis quis in non
            gravida. Justo.
          </p>
        </div>
      </div>
      <div className="MUN-main__right">
        <ul className="MUN-main__feature-list">
          <li className="MUN-main__feature-item">
            <div className="feature">
              <div className="feature__icon-box">
                <img src={iconCalander} alt="" className="feature__icon" />
              </div>
              <div className="feature__details">
                <h3 className="feature__title heading-tertiary">
                  Conference Date
                </h3>
                <p className="feature__subtitle">October 13 - 14, 2021</p>
              </div>
            </div>
          </li>
          <li className="MUN-main__feature-item">
            <div className="feature">
              <div className="feature__icon-box">
                <img src={iconVacancy} alt="" className="feature__icon" />
              </div>
              <div className="feature__details">
                <h3 className="feature__title heading-tertiary">Vacancy</h3>
                <p className="feature__subtitle">50 seats left</p>
              </div>
            </div>
          </li>
          <li className="MUN-main__feature-item">
            <div className="feature">
              <div className="feature__icon-box">
                <img src={iconClock} alt="" className="feature__icon" />
              </div>
              <div className="feature__details">
                <h3 className="feature__title heading-tertiary">Duration</h3>
                <p className="feature__subtitle">10 a.m. - 5 p.m.</p>
              </div>
            </div>
          </li>
          <li className="MUN-main__feature-item">
            <div className="feature">
              <div className="feature__icon-box">
                <img src={iconLocation} alt="" className="feature__icon" />
              </div>
              <div className="feature__details">
                <h3 className="feature__title heading-tertiary">Venue</h3>

                <p className="feature__location">
                  <span className="feature__location--main">Zydus School,</span>
                  <span className="feature__location--city">Ahmedabad,</span>
                  <span className="feature__location--map">
                    View in &nbsp;
                    <a href="#" className="feature__location--link">
                      Maps
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </li>
          <li className="MUN-main__feature-item">
            <div className="feature">
              <div className="feature__icon-box">
                <img src={iconCalenderClock} alt="" className="feature__icon" />
              </div>
              <div className="feature__details">
                <h3 className="feature__title heading-tertiary">
                  Booking Deadline
                </h3>
                <p className="feature__subtitle">September 15, 2021</p>
                <p className="feature__close">
                  Delegate registration closes at 11:59 p.m.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="MUN-main__btn-box">
          <button className="MUN-main__btn MUN-main__btn--download btn">
            Download Itinerary
            <img src={iconDownload} alt="" className="MUN-main__btn--icon" />
          </button>
          <button className="MUN-main__btn MUN-main__btn--briefcase btn">
            Add to My Briefcase
            <img src={iconBriefcase} alt="" className="MUN-main__btn--icon" />
          </button>
        </div>
        <div className="MUN-main__share-box">
          <img src={iconShare} alt="" className="MUN-main__share" />
        </div>
      </div>
    </div>
  );
}

export default MUNmain;
