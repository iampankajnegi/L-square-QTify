import React, { useEffect, useState } from "react";
import { Fetchgengenre } from "../ApI/Api";

import "./filter.css";

const Filtercomponent = ({ data, onDataFilter }) => {
  const [genData, setGenresData] = useState([]);
  const [isActive, setIsActive] = useState("All");
  const [loading, setLoading] = useState(true);

  const genrateGenresData = async () => {
    try {
      const result = await Fetchgengenre();
      console.log(result.data, "result"); // Check the format of result here
  
        setGenresData(result.data);
        setLoading(false)
    
      
    } catch (error) {
      console.log("Error in genres", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    genrateGenresData();
  }, []);

  const filterSong = (tab) => {
    if (tab === "All") {
      onDataFilter(data);
    } 
    
    else {
      const songResult = data.filter((song) => song.genre.label === tab);
      onDataFilter(songResult);
    }
  };

  const handleGenreClick = (e) => {
    const selectedGenre = e.target.innerText;
    setIsActive(selectedGenre);
    filterSong(selectedGenre);
  };

  return (
    <div>
      <div className="filters">
      {loading ? (
          <p>Loading genres...</p>
        ):
         genData.length !== 0 ? (
          <>
            <p
              className={isActive === "All" ? "active" : ""}
              onClick={handleGenreClick}
            >
              All
            </p>
            {genData.map((genre, index) => (
              <p
                key={index}
                className={isActive === genre.label ? "active" : ""}
                onClick={handleGenreClick}
              >
                {genre.label}
                    
              </p>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Filtercomponent;
