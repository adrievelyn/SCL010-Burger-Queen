import React from "react";
import { Menu } from "../../../data/menu.json";
import { Col } from "reactstrap";

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      value: " ",
      watch: false,
      watchfood: false,
      watchliquids: false,
      data: props.data
    };
    this.onClickToAdd = this.onClickToAdd.bind(this);
  }

  onClickToAdd(props) {
    this.setState({
      name: this.state.name.concat("Sandwich ham & cheese"),
      value: this.state.value
    });
    console.log("onclicktoadd", this.state.name, this.state.value);
  }

  componentDidMount(props) {
    /* console.log(this.props.name)*/
  }

  render() {
    return (
      <Col>
        {this.state.name}
        <div>
          <div>
            <h6>Breakfast</h6>
            <div className="line"></div>
            {Menu.Sandwich.map(btn => (
              <button
                key={btn}
                onClick={this.onClickToAdd.bind(this)}
                className="main-button"
              >
                <img src={btn.img} alt="icon"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}

            <h6>Main</h6>
            <div className="line"></div>
            <div className="burger-button">
              {Menu.Simple_Burger.map(btn => (
                <button className="main-button">
                  <img src={btn.img} alt="icon"></img>
                  <div>
                    <p>{btn.name}</p>
                  </div>
                  <div>
                    <p className="item-price">${btn.value}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="burger-button">
              {Menu.Double_Burger.map((btn, i) => (
                <button
                  key={i}
                  onClick={this.onClickToAdd.bind(this)}
                  className="main-button"
                >
                  <img src={btn.img} alt="icon"></img>
                  <div>
                    <p>{btn.name}</p>
                  </div>
                  <div>
                    <p className="item-price">${btn.value}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="item-btn-row">
            <h6>Toppings</h6>
            <div className="line"></div>
            {Menu.Toppings.map(btn => (
              <button className="main-button">
                <img src={btn.img} alt="icon"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="item-btn-row">
            <h6>Side Dishes</h6>
            <div className="line"></div>
            {Menu.Side_Dishes.map(btn => (
              <button className="main-button">
                <img src={btn.img} alt="icon"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Col>
    );
  }
}

export default Food;
