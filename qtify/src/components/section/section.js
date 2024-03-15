import { useState } from "react";
import React from "react";

import { CircularProgress } from "@mui/material";
import Cardcomp from "../card/Cardcomp";
import "./section.css";
import Carousel from "../Carousel/Carousel";
import Filtercomponent from "../Filter/Filtercomponent";

const Section = ({ title, data, type  }) => {
  const [collapseAlbum, setCollapseAlbum] = useState(true);
  const [filterData , setFilterData] = useState(data)

 

  console.log(data, "sectiondata");
  const handleToggle = () => {
    setCollapseAlbum(!collapseAlbum);
    
  };

  const handleFilter =(songData)=>{

      setFilterData(songData)
  }

  console.log(filterData ,"filterData")

  return (
    <>
      <div className="section-wrapper">
        <h3>{title}</h3>

        {type === "songs" && (
        <Filtercomponent  data={data} onDataFilter={handleFilter}/>
        )}
        {type !=="songs" &&(
        <h4 className="toggleText" onClick={handleToggle}>
          {collapseAlbum ? "Show" : "Collapse"}
        </h4>
      )}
      </div>

      {data.length === 0 ? ( 
        <CircularProgress />
      ) : (
        <div className="card-album">
         
        
          {!collapseAlbum  ? (
            <div className="carAlbum-data">
             
             {filterData.length >0 ?
             
               filterData.map((item , index)=>(
                <Cardcomp key={index} data ={item} type={type}/>
               ))

             
               

              : data.map((item ,index ) => (
                <Cardcomp key={index} data={item} type={type} />
              ))}
            </div>
          ) : (
         
              <Carousel  
                
              data={type === "songs" ? filterData : data}
                renderCardComponent={(data)=> <Cardcomp data={data} type={type}/>}
              
              />
         
          )}
        </div>
      )}
    </>
  );
};

export default Section;
