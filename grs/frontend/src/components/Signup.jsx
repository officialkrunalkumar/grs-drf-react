import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './footer';
import '../static/main.css';

const Signup = ({ setUser }) => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== "" && username !== ""){
    let path = `/create-complaint`;
    history.push(path);
    }
    else
    {
      var text="Please fill all the data.";
      document.getElementById("validity").innerHTML = text;
      document.getElementById("validity").style.color = "red";
    }
    setUsername(username);
  };
  return (
    <>
      <div id="home">
      <Navbar />
      <div id="krunal">
      <div className="container h-100" />
        <div className="d-flex justify-content-center h-100" />
          <div className="user_card">
            <div className="mb-4 mt-4 text-center">
              <h3 id="form-title" className="alert">Join MountBlue Grievance Redressal Portal</h3>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form method="POST" action="">
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username..."
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-envelope-square"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email..."
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password..."
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p id="validity"></p>
                <div className="d-flex justify-content-center mt-3 login_container">
                <div className="btn btn-outline-info btn-lg">
                  <input
                    className="btn login_btn"
                    type="submit"
                    value="Sign Up"
                    onClick={handleSubmit}
                  />
                </div>
                </div>
              </form>
            </div>

            <div className="mt-4 mb-4">
              <div className="d-flex justify-content-center links">
                Already have an account?{" "}
                <Link to="/login" className="ml-2 mb-4">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Signup;