import React from 'react'
import headphone from "../../assets/vibrating-headphone 1.png"
import "./hero.css"
const Herosection = () => {
  return (
    <div className='hero-container'>

      <div className="hero-section">
        
        <div className="hero-heading">
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
        </div>
        <div className="hero-img">
            <img src={headphone} alt="" />
        </div>

      </div>


    </div>
  )
}

export default Herosection