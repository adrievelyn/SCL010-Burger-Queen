import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderMenu from "../../../app/features/events/OrderMenu.js";
import { Col } from "reactstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickAdd(name, value) {
    this.setState({
      name: name,
      value: value
    });
  }

  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list
      };
    });
  };

  render() {
    return (
      <div className="menu-row-container">
        <div className="row">
          <div className="col-md-6 col-md-offset-6">
            <Tabs className="ShowMenu">
              <TabList className="react-tabs__tab-list">
                <Tab className="react-tabs__tab">
                  <img
                    src={require("../../../../src/img/icon-menu-drinks.svg")}
                    height="80"
                    width="80"
                    alt="icon"
                  />
                </Tab>
                <Tab className="react-tabs__tab">
                  <img
                    src={require("../../../../src/img/icon-menu-food.svg")}
                    height="80"
                    width="80"
                    alt="icon"
                  />
                </Tab>
              </TabList>
              <TabPanel>
                <Drinks />
              </TabPanel>
              <TabPanel>
                <Food clickToAdd={this.onClickAdd.bind(this)} />
              </TabPanel>
            </Tabs>
          </div>
          <Col className="Order-container">
            <OrderMenu />
          </Col>
        </div>
      </div>
    );
  }
}

export default Menu;

/*/* <label>Waiter: </label> <input type="textbox" />
<hr />
<label>Client: </label> <input type="textbox" />
<hr />
<br />
<h3>Order </h3>
<hr />
<p>{this.state.name}</p>
<p>{this.state.value}</p> */
