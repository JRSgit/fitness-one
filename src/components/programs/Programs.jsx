import React from 'react'
import './Programs.css'

import { programsData } from '../../data/programsData.jsx'

import RigthArrow from '../../assets/rightArrow.png'

function Programs() {
  return (
    <div className='programs' id='programs'>
      {/* header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      {/* programs */}
      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RigthArrow} alt="" />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Programs