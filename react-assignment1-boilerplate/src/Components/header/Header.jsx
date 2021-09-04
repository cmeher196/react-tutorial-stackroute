import React from 'react';
import '../header/header.style.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
                <div className="container-fluid">
                    <p className="navbar-brand">Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav"> 
                        {/* eslint-disable-next-line */}
                            <p className="nav-link active" aria-current="page">Home</p>
                            <p className="nav-link">Features</p>
                            <p className="nav-link">Pricing</p>
                        </div>
                    </div>
                </div>
            </nav>        </div>
    );
};

export default Header;