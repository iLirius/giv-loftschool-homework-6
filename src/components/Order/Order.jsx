import React, { Component } from "react";
import "./Order.css";

class Order extends Component {
  render() {
    const { name, price, createdAt } = this.props;

    return (
      <div className="order" id="order-{{id}}">
        <div className="order__upper">
          <p className="p--order">{name}</p>
          <p className="p--order">
            Цена: <span>{price}</span>
          </p>
        </div>
        <div className="order__lower">
          <p className="p--order">
            {createdAt.getFullYear() +
              "." +
              createdAt.getMonth() +
              "." +
              createdAt.getDate() +
              " " +
              createdAt.getHours() +
              ":" +
              createdAt.getMinutes() +
              ":" +
              createdAt.getSeconds()}
          </p>
        </div>
      </div>
    );
  }
}

export default Order;
