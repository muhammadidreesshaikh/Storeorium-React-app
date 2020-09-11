import React from 'react';
import '../assets/css/header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'

function Header() {
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                        </div>

                        <div className="col-sm-9 col-md-9 col-lg-9">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/cart">Products</Link></li>
                                    <li><Link to="/cart">About</Link></li>
                                    <li><Link to="/cart">Services</Link></li>
                                    <li><Link to="/odernow">Oder Now</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;