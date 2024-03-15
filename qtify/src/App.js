
import './App.css';


import Naavbaar from './components/Navbar/Naavbaar';
import Section from "./components/section/section"
import {Fetchgensongs, Fetchnewalbums, Fetchtopalbums} from "./components/ApI/Api"
import { useEffect, useState } from 'react';

function App() {
    
  const [topAlbumData, setTopAlbumData] = useState([]);

  const [newAlbumData , setnewAlbumData] = useState([]);

  const [topSongData , setTopSongData] = useState([]);


  // Fetch top album data
  const generateTopAlbumData = async () => {
    try {
      const data = await Fetchtopalbums();
      console.log(data ,"dts");
      setTopAlbumData(data);
      
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  };


  //  Feth new album data


  const generateNewAlbumData = async()=>{

    try{

      const newData = await Fetchnewalbums();

      console.log(newData , "new")

       setnewAlbumData(newData)
  }


catch(error){

   console.log("Error in generating New aLbum Data",error)
}
}

    //  fetching song



    const generateSongData = async()=>{

  try{

    const songData = await Fetchgensongs();

    console.log(songData , "new")

     setTopSongData(songData)
}


catch(error){

 console.log("Error in generating song Data",error)
}
}

  
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateSongData();

  }, []);
 
  console.log(topAlbumData, "string");
  console.log(newAlbumData, "song")
  console.log(topSongData,"topsongs")

  return (
  <>
   <Naavbaar/>

    <div className="middel-wrapper">
   <Section type ="album" title = "Top Albums" data = {topAlbumData}  />
   <Section type= "album" title="New Albums" data={newAlbumData} />
   <Section type="songs" title="Song" data={topSongData}  />
  
   </div>
  </>
  );
}

export default App;
