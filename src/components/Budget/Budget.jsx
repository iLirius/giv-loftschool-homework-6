import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProfit,
  getMarketExpanse,
  getFarmExpanse,
  getDeliveryExpanse
} from "../../reducers/budget";

import "./Budget.css";

class Budget extends Component {
  render() {
    const { deliveryExpanse, marketExpanse, farmExpanse, profit } = this.props;
    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <div>
          <p>
            Всего получено денег: <span>{profit}</span>
          </p>
          <p>
            Расходы продавцов: <span>{marketExpanse}</span>
          </p>
          <p>
            Расходы на ферме: <span>{farmExpanse}</span>
          </p>
          <p>
            Расходы на доставку: <span>{deliveryExpanse}</span>
          </p>
          <p>
            Итого:{" "}
            <span>
              {profit - marketExpanse - farmExpanse - deliveryExpanse}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deliveryExpanse: getDeliveryExpanse(state),
  marketExpanse: getMarketExpanse(state),
  farmExpanse: getFarmExpanse(state),
  profit: getProfit(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
