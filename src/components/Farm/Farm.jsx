import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order";

import { moveOrderToCustomer } from "../../actions/farmActions";
import { getOrderFarm } from "../../reducers/farm";
import "./Farm.css";

class Farm extends Component {
  h
  andleClickMoveOrderToCustomer = () => {
    const {moveOrderToCustomer, orders} = this.props;
    moveOrderToCustomer(orders[orders.length - 1]);
  }
  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={!orders.length} onClick={this.andleClickMoveOrderToCustomer}>Отправить урожай клиенту</button>
        <div>{orders.map(order => <Order key={order.id} {...order} />)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: getOrderFarm(state)
});
const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
