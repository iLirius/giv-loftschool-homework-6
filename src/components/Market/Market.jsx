import React, { Component } from "react";
import { connect } from "react-redux";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions/";
import { getOrderMarket } from "../../reducers/market";

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
  handleClickCreateOrder = () => {
    const { createOrder } = this.props;
    const newOrder = getNewOrder();
    createOrder(newOrder);
  };
  handleClickMoveOrderToFarm = () => {
    const { moveOrderToFarm, orders } = this.props;
    moveOrderToFarm(orders[orders.length - 1]);
  };
  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleClickCreateOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={!orders.length}
          onClick={this.handleClickMoveOrderToFarm}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(order => <Order key={order.id} {...order} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: getOrderMarket(state)
});

const mapDispatchToProps = { createOrder, moveOrderToFarm };

export default connect(mapStateToProps, mapDispatchToProps)(Market);
