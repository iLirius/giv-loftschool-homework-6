import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order";

import "./Farm.css";

class Farm extends Component {
  state = { orders: [] };
  render() {
    const { orders } = this.state;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled>Отправить урожай клиенту</button>
        <div>{orders.map(order => <Order />)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
