import React from 'react';
import './SectionCommety.scss';
import './../../sassStyles/base/_typography.scss';

import Commety from './../Commety/Commety';
import CommetyBody from './../CommetyBody/CommetyBody';

function SectionCommety() {
  return (
    <div className="section-commety" id="section-commety">
      <h2 className="section-commety__title heading-secondary"> Committees</h2>
      <div className="section-commety__item-box">
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
        <Commety></Commety>
      </div>
      <CommetyBody></CommetyBody>
    </div>
  );
}

export default SectionCommety;
