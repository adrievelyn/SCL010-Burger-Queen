import React from "react";

class OrderKitchen extends React.Component {
  constructor(props) {
    super(props);
  }

 maporders(orders){
   if(orders){
    return (this.props.order.order.map((item, index) => (
      <label className="box-value">
      <li>{item.name}</li>
      <li>${item.value}</li>
    </label>
    )))
   }else{
     return (<div></div>)
   }
    
  }
  render() {
    return (
      <div className="order-kitchen-card">
        <h6>{this.props.order.waiter}</h6>
        <div className="line"></div>
        <p>{this.props.order.client}</p>
        <label className="box-value">
          <p>{this.props.order.createdAt}</p>
        </label>
        <div className="line-thin"></div>
        <div>
        {this.maporders(this.props.order.order)}
        </div>
        <div className="line-thin"></div>
        <br />
        <div className="btn-kitchen">
          <div className="template-order">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              <br />
            </label>
            <p>Cooked</p>
          </div>
          <div className="template-order">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              <br />
            </label>
            <p>Delivered</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderKitchen;

// class OrderKitchen extends React.Component {
//   render() {
//     return this.props.data.map(e => (
//       <div key={e.data.id}>
//         <p>{e.data.createdAt}</p>
//         <p>{"Client: " + e.data.client}</p>
//         <p>{"Waiter: " + e.data.waiter}</p>
//         <div className="template-order">
//           <button className="btn-order-template" onClick={console.log("ready")}>
//             Ready
//           </button>
//         </div>
//       </div>
//     ));
//   }
// }

// class OrderKitchen extends Component {

//   render() {
//     return this.props.data.map(e => (
//       <div key={e.data.id}>
//         <p>{e.data.createdAt}</p>
//         <p>{"Client: " + e.data.client}</p>
//         <p>{"Waiter: " + e.data.waiter}</p>
//         <div className="template-order">
//           <button className="btn-order-template" onClick={console.log("ready")}>
//             Ready
//           </button>
//         </div>
//       </div>
//     ));
//   }
// }

// export default OrderKitchen;

// class OrderKitchen extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("kitchen");
//   }

//   componentDidMount() {
//     console.log("leer data");
//     const db = firebase.firestore();
//     db.settings({
//       timestampsInSnapshots: true
//     });
//     db.collection("orders")
//       .where("statusNotReady", "==", true)
//       .orderBy("createdAt", "asc")
//       .limit(6)
//       .onSnapshot(querySnapshot => {
//         this.setState({
//           data: querySnapshot.docs.map(doc => {
//             return { data: doc.data() };
//           })
//         });
//       });
//   }
//   render() {
//     return this.props.data.map(e => (
//       <div>
//         <h4>ORDERS</h4>
//       </div>
//     ));
//   }
// }