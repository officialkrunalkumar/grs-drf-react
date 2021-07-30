import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const Footer = () => {
    return (
        <div className="container-fluid" id="footer">
        <u><h1>Contact</h1></u>
        <div>
        <a className="footer-link" rel="noreferrer" href="mailto:krunalkumar@mountblue.io" target="_blank">Email Me :- krunalkumar@mountblue.io</a>
        </div>
        <div>
        <a className="footer-link" rel="noreferrer" href="https://wa.me/918200713617?text=Hello" target="_blank">WhatsApp Me :- +91 82007 13617</a>
        </div>
        <br />
        <i><u><p><a href="#home">Back to Top</a></p></u></i>
        <br />
        <u>
            <span className="footer-link">
            <small>Copyright &copy; 2021, Krunalkumar Shah</small>
            </span>
        </u>
        </div>
    )
}

export default Footer;