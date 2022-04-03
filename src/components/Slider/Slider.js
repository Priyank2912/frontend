import React from 'react';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Img1 from '../../images/image 4.png';
import Img2 from '../../images/image 1.png';
import Img3 from '../../images/image 5.png';
import './Slider.scss';

function Slider() {
  return (
    <div className="slider-box">
      <Splide
        options={{
          focus: 'center',
          fixedWidth: 850,
          rewind: true,
         
          type: 'loop',
          padding: {
            right: '1rem',
            left: '1rem',
          },
          autoWidth: true,
          gap: '1rem',
          autoplay: true,
          speed: 1000,
          pauseOnHover: true,
          interval: 5000,
        }}
      >
        <SplideSlide>
          <img src={Img2} alt="Image 2" className="slide-image" />
        </SplideSlide>
        <SplideSlide>
          <img src={Img2} alt="Image 1" className="slide-image" />
        </SplideSlide>
        <SplideSlide>
          <img src={Img2} alt="Image 3" className="slide-image" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
