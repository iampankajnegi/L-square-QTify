import React from "react";
import { Chip, Tooltip } from "@mui/material";
import "./card.css";

const Cardcomp = ({ data, type }) => {
  console.log(data, "card");
  return (
    <>
      {type === "album" ? (
        <Tooltip
          title={`${data.songs?.length} songs` || "New Album"}
          placement="top"
          arrow
        >
          <div className="main-card">
            <div className="card">
              <img src={data.image} alt="album" loading="lazy" />

              <div className="card-content">
                <Chip
                  className="chip"
                  label={`${data.follows} Follows` || "New Album"}
                  size="small"
                />
              </div>
            </div>
            <div className="Album-name">
              <p>{data.title}</p>
            </div>
          </div>
        </Tooltip>
      ) : (
        <Tooltip
          title={`${data.songs?.length} songs`}
          placement="top"
          arrow
        >
          <div className="main-card">
            <div className="card">
              <img src={data.image} alt="album" loading="lazy" />

              <div className="card-content">
                <Chip
                  className="chip"
                  label={`${data.likes} Likes`}
                  size="small"
                />
              </div>
            </div>
            <div className="Album-name">
              <p>{data.title}</p>
            </div>
          </div>
        </Tooltip>
      )}
    </>
  );
};
export default Cardcomp;
