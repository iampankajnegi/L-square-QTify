import React  from "react";
import { Chip , Tooltip } from "@mui/material";
import "./card.css";



const Cardcomp = ({ data , type}) => {

  console.log(data, "card")
  return (
    <> 
       {type === "album" ?(
         
         
         <Tooltip title={`${data?.songs} songs`} placement="top" arrow >
         <div className="main-card">
         <div className="card">
           <img src={data.image} alt="album" loading='lazy' />
 
           <div className="card-content">
           <Chip className="chip" label={`${data.follows} Follows`} size="small" />
 
           </div>
         
 
         </div>
         <div className="Album-name">
         <p>{data.title}</p>
         </div>
       </div>
       </Tooltip>
       ):(

        <div className="new-album">
        <Tooltip title={`${data?.songs} songs`} placement="top" arrow >
        <div className="main-card">
        <div className="card">
          <img src={data.image} alt="album" loading='lazy' />

          <div className="card-content">
          <Chip className="chip" label={`${data.follows} Follows`} size="small" />

          </div>
        

        </div>
        <div className="Album-name">
        <p>{data.title}</p>
        </div>
      </div>
      </Tooltip>
      </div>
       )} 

          </>
  );
};
export default Cardcomp;
