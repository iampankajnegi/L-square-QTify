import React from 'react'
import "./nav.css"
import logo from "../../assets/QtifyLogo.png"
import Searchbar from '../Search/Searchbar'
import Herosection from '../herosection/Herosection'




const Naavbaar = () => {
  return (
 <>
    <div className="naav">
        <a className="nav-logo" href='/'>

          <div>
          <img src={logo} alt="" />
        
          
        </div>
        </a>

        <Searchbar/>

      

       
    </div>
       
      <Herosection/> 
     
      
 </>
  )
}

export default Naavbaar