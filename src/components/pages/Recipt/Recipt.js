import React, { useEffect } from 'react';

import './Recipt.scss';

import SectionRecipt from './../../SectionRecipt/SectionRecipt';

function Recipt() {
  
  useEffect(()=>{
    window.scrollTo({
      top:0,
    })
},[]);

  return (
    <div className="section-recipt-box container">
      <SectionRecipt></SectionRecipt>
    </div>
  );
}

export default Recipt;
