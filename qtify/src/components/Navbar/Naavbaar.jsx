import React from 'react'
import "./nav.css"
import logo from "../../assets/QtifyLogo.png"
import Searchbar from '../Search/Searchbar'
import Logocontent from '../logocontent/Logocontent'
import Herosection from '../herosection/Herosection'


const Naavbaar = () => {
  return (
 <>
    <div className="nav">
        <div className="nav-logo">

          
          <img src={logo} alt="" />
        
          
        </div>

        <Searchbar/>

        <Logocontent/>

       
    </div>
       
      <Herosection/> 

 </>
  )
}

export default Naavbaar