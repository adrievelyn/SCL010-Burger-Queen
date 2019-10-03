import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from "../features/dashboard/Menu";
import Kitchen from "../features/dashboard/Kitchen";
import Resume from "../features/dashboard/Resume";
import logo from "../../img/logo_burger_queen.svg";
import menuIcon from "../../img/menu_icon.svg";
import kitchenIcon from "../../img/kitchen_icon.svg";
import resumeIcon from "../../img/resume_icon.svg";



function App() {
  return (
    <Router>
      <nav>
        <ul className="navbar navbar-white bg-white">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="BQ-logo" />
            </a>
          </div>
          <a href="/">
            <Link to="/" className="text-black">
            <div>
              <img src={menuIcon}></img>
              <p> Menu</p>
            </div>
             
            </Link>
          </a>
          <a href="/kitchen">
            <Link to="/kitchen" className="text-black">
            <div>
              <img src={kitchenIcon}></img>
              <p>Kitchen</p>
            </div>
              
            </Link>
          </a>
          <a href="/resume">
            <Link to="/resume" className="text-black">
            <div>
              <img src={resumeIcon}></img>
              <p>Resume</p>
            </div>
              
            </Link>
          </a>
        </ul>
        <Route exact path="/" component={Menu} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/resume" component={Resume} />
      </nav>
    </Router>
  );
}

export default App;
