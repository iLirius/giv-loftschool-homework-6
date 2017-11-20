import React, { Component } from "react";
import "./Order.css";

class Order extends Component {
  render() {
    return (
      <div className="order">
        <div className="order__upper">
          <p className="p--order">Название: Горох</p>
          <p className="p--order">Цена: 194</p>
        </div>
        <div className="order__lower">
          <p className="p--order">Создан: 00:03:15 GMT+0300 (MSK)</p>
        </div>
      </div>
    );
  }
}

export default Order;
