import "./SearchBar.css";
import { useState } from "react";

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
       
    };
    const handleChange= (event) =>{
            setTerm(event.target.value);
}    

    return (
    <div className="search-bar" >
        <form role="search" onSubmit={handleFormSubmit}>
            <label htmlFor="search">Enter Search Term</label>
            <input id="search" value={term} onChange={handleChange} />
        </form>
    </div>
    );
};

export default SearchBar;
