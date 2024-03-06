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

