import { useState } from "react";
import React from "react";

import { CircularProgress } from "@mui/material";
import Cardcomp from "../card/Cardcomp";
import "./section.css";

const Section = ({ title, data, type }) => {
  const [collapseAlbum, setCollapseAlbum] = useState(true);

  console.log(data, "sectiondata");
  const handleToggle = () => {
    setCollapseAlbum(!collapseAlbum);
  };

  return (
    <>
      <div className="section-wrapper">
        <h3>{title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {collapseAlbum ? "Show" : "Collapse"}
        </h4>
      </div>

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="card-album">
          {!collapseAlbum ? (
            <div className="carAlbum-data">
              {data.map((item) => (
                <Cardcomp key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <div>
              <div className="carAlbum-data">
                {data.slice(0, 8).map((item, index) => (
                  <Cardcomp key={item.id} data={item} type={type} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Section;
