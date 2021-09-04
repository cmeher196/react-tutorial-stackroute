import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../header/header.css'
const Header = (props) => {
    const [isAuth, setIsAuth] = useState('false');
    const history = useHistory();
    const signout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuthenticated');
        history.push('/');
        // window.location.reload(false);
    }

    useEffect(() => {
        setIsAuth(localStorage.getItem('isAuthenticated'));
    })

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-info text-dark">
                <div className="container-fluid">
                    <p className="navbar-brand">News 24x7</p>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a href="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/readnow" style={{ textDecoration: 'none', color: 'black' }}>ReadNow</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {isAuth ? 
                <button className='btn btn-danger' style={{ float: 'right', width: '100px' }} onClick={signout}>Sign Out</button>
                :""    }   
            </nav>
        </div>
    );
};

export default Header;