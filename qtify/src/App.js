
import './App.css';


import Naavbaar from './components/Navbar/Naavbaar';
import Section from "./components/section/section"
import {Fetchtopalbums} from "./components/ApI/Api"
import { useEffect, useState } from 'react';

function App() {
    
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await Fetchtopalbums();
      console.log(data ,"dts");
      setTopAlbumData(data);
      
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  };
  
  useEffect(() => {
    generateTopAlbumData();
  }, []);
 
  console.log(topAlbumData, "string");
  return (
  <>
   <Naavbaar/>

    <div className="middel-wrapper">
   <Section type ="album" title = "Top Albums" data = {topAlbumData}  />
   </div>
  </>
  );
}

export default App;
