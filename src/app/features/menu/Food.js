import React from "react";
// import "./App.css";
import { Menu } from "../../../data/menu.json";
import "bootstrap/dist/css/bootstrap.css";

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Menu
    };
  }
  render() {
    return (
      <div>
        
          
            <h6>Breakfast</h6>
            <div className="line"></div>
            {Menu.Sandwich.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button">
                 <img src={btn.img}></img>
                 <div><p>{btn.name}</p></div>  
                 <div><p>${btn.value}</p></div>
              </button>
            ))}

            <h6>Main</h6>
            <div className="line"></div>
            <div className="burger-button">
            {Menu.Simple_Burger.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button">
                <img src={btn.img}></img>
                <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
              ))}
            </div>
            <div className="burger-button">
            {Menu.Double_Burger.map(btn => (
              <button className="main-button">
                <img src={btn.img}></img>
                <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
            </div>
          <h6>Toppings</h6>
          <div className="line"></div>
          <div className="item-btn-row">
            {Menu.Toppings.map(btn => (
              <button className="main-button">
              <img src={btn.img}></img>
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              
              </button>
            ))}
          </div>
          <h6>Side Diches</h6>
          <div className="line"></div>
          <div className="item-btn-row">
            {Menu.Side_Diches.map(btn => (
              <button className="main-button">
              <img src={btn.img}></img>
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
          </div>
        
      </div>
    );
  }
}
export default Food;
