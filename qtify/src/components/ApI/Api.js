import axios from "axios";

export const BACK_ENDPOINT = "https://qtify-backend-labs.crio.do/";


export const Fetchtopalbums = async() => {
  try {
    const response = await axios.get(`${BACK_ENDPOINT}/albums/top`);

    return response.data

    
  } catch (error) {
    console.error('Error fetching top albums:', error);
  }

};


export const Fetchnewalbums = async()=>{

  try{

       const response = await axios.get(`${BACK_ENDPOINT}/albums/new`);

       return response.data
  }

  catch(error){

              console.log('Error fetching new albums',error)
  }
}


export const Fetchgensongs = async()=>{

 try{

   const response = await axios.get(`${BACK_ENDPOINT}/songs`);
   return response.data
   
}
catch(error){

   console.log("Error fetching songs", error)
}
}





 
export const Fetchgengenre = async()=>{

  try{
 
    const response = await axios.get(`${BACK_ENDPOINT}/genres`);
    return response.data

  
    
 }
 catch(error){
 
    console.log("Error fetching songs", error)
 }

 
 }