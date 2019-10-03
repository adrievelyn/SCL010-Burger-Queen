<<<<<<< HEAD
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import NavBarGeneral from "./features/nav/NavBarGeneral";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
import drinksIcon from "../../../img/menu_drink_icon.svg";
import foodIcon from "../../../img/menu_food_icon.svg";

function NavBarMenu() {
  return (
    <Router>
      <div className="lead col-md-6">
        <ul className="navbar">
          <a href="/drinks">
            <Link to="/drinks" className="text-white">
              <div>
              <img src={drinksIcon}></img>
              <p>Drinks</p>
              </div>
            </Link>
          </a>

          <a href="/main">
            <Link to="/main" className="text-white">
            <div>
            <img src={foodIcon}></img>
            <p>Food</p>
            </div>
            </Link>
          </a>
        </ul>

        <Route exact path="/drinks" component={Drinks} />
        <Route path="/main" component={Food} />
      </div>
    </Router>
  );
}

export default NavBarMenu;
=======
>>>>>>> a7c8ae1338d43797cdbc1ab4081f8a934370a211
