import React, { Component } from "react";
import Navbar from "./Navbar";
import '../static/main.css';
import Footer from "./footer";

class HomePage extends Component {
    render() {
        return (
            <section>
            <div id="home">
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                     rel="stylesheet" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                <Navbar />
                <div className="container text-center d-none d-sm-block">
                <h1 className="home-heading">Hello, Welcome To <span class="color-blue">Mountblue</span> <u>Grievance Redressal System</u></h1>
                </div>
                 <div className="container d-md-none d-sm-block text-center">
                <h1 className="home-heading-sm"><u>Grievance Redressal System</u></h1>
                 </div>
            </div>
            <Footer />
            </section>
        )
    }
}

export default HomePage;