import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order";

import "./Market.css";

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  state = {
    orders: [],
    isOrderable: false
  };

  handleClickCreateOrder = () => {
    // const { orders } = this.state;
    const newOrder = getNewOrder();
    this.setState({ orders: [...this.state.orders, newOrder] });
  };

  render() {
    const { orders, isOrderable } = this.state;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleClickCreateOrder}
        >
          Создать заказ
        </button>
        <button disabled={!isOrderable}>Отправить заказ на ферму</button>
        <div className="order-list">{orders.map(order => <Order />)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
