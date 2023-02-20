import "./Application.css"
import { useState } from "react";
import React from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import {searchImages} from "./api";


function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
       const result = await searchImages(term);
       setImages(result);
    };

    return (
        <div className="application">
            <div><SearchBar onSubmit={handleSubmit} /></div>
            
            <div><ImageList images={images} /></div>
            
        </div>
    );
};

export default App;
