import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Various <span className="text-danger">Educational </span>Books</h1>
                <p>Get yourself amazing books at an affordable price..</p>
                
                <SearchInputForm darkTheme={ true }/>
            </div>
        </section>
    )
}

export default Showcase;