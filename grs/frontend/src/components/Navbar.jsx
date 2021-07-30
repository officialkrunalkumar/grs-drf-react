import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { NavLink } from "react-router-dom";
import mb from '../static/logo.jpg';

const Navbar = () => {
    return (
            <section>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <div>
            <nav className="navbar navbar-expand-lg navbar-light text-center">
                <div className="container">
                    <a className="navbar-brand" rel="noreferrer" href="https://www.mountblue.io" target="_blank"><img src={mb} alt="MountBlue"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="https://prep.mountblue.io/" target="blank">MountBlue Prep</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="https://learn.mountblue.io/" target="blank">MountBlue LMS</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/signup">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://careers.mountblue.io/" target="blank">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://docs.google.com/document/d/1ZfKutj65BgQSYyEhBxoCRJ6C8Gd-B477NCGhlIjly2U/edit" target="blank">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact</a>
                    </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        </section>
    )
}

export default Navbar;
