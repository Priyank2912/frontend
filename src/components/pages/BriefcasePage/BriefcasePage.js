import React, { useEffect } from 'react';
import './BriefcasePage.scss';
import './../../../sassStyles/base/_typography.scss';
import Briefcase from './../../Briefcase/Briefcase';
function BriefcasePage() {
  
  useEffect(()=>{
      window.scrollTo({
        top:0,
      })
  },[]);
  return (
    <div className="section-briefcase">
      <div className="container">
        <h2 className="section-briefcase__title heading-secondary ">
          My Briefcase
        </h2>
        <Briefcase></Briefcase>
        <Briefcase></Briefcase>
      </div>
    </div>
  );
}

export default BriefcasePage;
