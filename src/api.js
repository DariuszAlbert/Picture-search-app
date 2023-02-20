import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const searchImages = async (term) => {
   const response = await axios.get( API_URL, {
        headers: {
            Authorization: API_KEY,
        },

        params: {
            query: term,
        }
    });
    
    return response.data.results;
};

export {searchImages};