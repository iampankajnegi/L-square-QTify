import React from 'react'
import headphone from "../../assets/vibrating-headphone 1.png"
import "./hero.css"
const Herosection = () => {
  return (
    <div className='hero-container'>

      <div className="hero-section">
        
        <div className="left-heading">
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div className="right-img">
            <img src={headphone} alt="" />
        </div>

      </div>


    </div>
  )
}

export default Herosection