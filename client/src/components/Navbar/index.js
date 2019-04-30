//
// NavBar UI Component
//
// index.js
//

// Import the React library
import React from "react";
import './styles.css';

// Import the CSS for the NavBar component

// Function to construct the NavBar component of the UI
function NavBar(props) {
    //console.log(props);
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/"> 
                <img id="nav-bar-image" alt="logo" src="/google.jpg"></img>
                <span className="navbar-bar-text">Book Application</span>
            </a> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/save">Save</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// Export the NavBar UI component
export default NavBar;