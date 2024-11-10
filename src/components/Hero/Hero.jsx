import React from 'react'
import './Hero.css'
const Hero = ({h1, p, imgSrc, btn}) => {
  return (
   <>
   <div className="hero__wrapper">
    <div className="div">
        <img className='hero__img' src={imgSrc} alt="" />
    </div>
     <div className="hero__text">
        <h1>{h1}</h1>
        <p>{p}</p>
        <button className='hero__btn'>{btn}</button>
     </div>
   </div>
   </>
  )
}

export default Hero