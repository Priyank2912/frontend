import React, { useEffect } from 'react';

import './MUN.scss';

// MUN Page

import SectionMUN from '../../SectionMUN/SectionMUN';
// import MUNMain from './../../MUNmain/MUNmain';
// import MUNTimer from './../../MUNTimer/MUNTimer';
// import MUNIncludes from './../../MUNIncludes/MUNIncludes';
import GetInTouch from './../../GetInTouch/GetInTouch';
import Commety from './../../Commety/Commety';
import SectionCommety from './../../SectionCommety/SectionCommety';

function MUN() {
  
  useEffect(()=>{
      window.scrollTo({
        top:0,
      })
  },[]);

  return (
    <div className="MUN container">
      <div className="MUN__top">
        <SectionMUN className="section-MUN"></SectionMUN>
      </div>
      <div className="MUN__bottom">
        <SectionCommety className="section-commety"></SectionCommety>
        <GetInTouch className="get-in-touch"></GetInTouch>
      </div>
    </div>
  );
}

export default MUN;
