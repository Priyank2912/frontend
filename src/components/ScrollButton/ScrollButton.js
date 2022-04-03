import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './ScrollButton.scss';

import iconArrowUp from './../../images/svg/akar-icons_arrow-down.svg';
import iconArrowDown from './../../images/svg/akar-icons_arrow-down.svg';
import { useHistory } from 'react-router';

function ScrollButton(props) {
  let icon;
  const history = useHistory();
  const [position, changePosition] = useState('up');
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop + window.innerHeight > document.body.clientHeight / 2) {
        if (position == 'up') {
          changePosition('down');
        }
      } else {
        if (position != 'up') {
          changePosition('up');
        }
      }
    });
  });
  if (props.arrow === 'up') {
    icon = iconArrowUp;
  } else {
    icon = iconArrowDown;
  }
  if (position == 'up') {
    return (
      <Link
        activeClass="active"
        to="section-commety"
        smooth={true}
        offset={-140}
        duration={1000}
      >
        <button
          onClick={() => {
            setTimeout(() => {
              document.querySelector('.section-MUN-right').style.display =
                'none';
              document.querySelector('.section-MUN-right--2').style.display =
                'block';
            }, 1000);
          }}
          className="btn btn-include"
        >
          {props.text}
          <img src={icon} alt="" className="MUN__include-icon" />
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={() => {
          history.push('/booking');
        }}
        className="btn btn-include"
      >
        Book Now
        <img
          src={icon}
          alt=""
          className="MUN__include-icon"
          style={{ transform: 'rotate(-90deg)', transition: 'all 1s' }}
        />
      </button>
    );
  }
}

export default ScrollButton;
