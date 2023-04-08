import React from 'react'
import Header from '../header/Header'
import './Hero.css'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'


function Hero() {
  return (
    <div className='hero'>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        {/* heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div><span>Ideal body</span></div>
          <div>
            <span>
              In here we will help your to shape
              and build your ideal body and live up your life
              to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coach</span>
          </div>
          <div>
            <span>+980</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Start</button>
          <button className="btn">Learn More</button>
        </div>

      </div>
      {/* right-h */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate </span>
          <span>116 bpm </span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="hero_image" className='hero-image' />
        <img src={hero_image_back} alt="hero_image_back" className='hero-image-back' />
        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero