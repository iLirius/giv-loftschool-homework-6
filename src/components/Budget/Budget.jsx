import React, { Component } from "react";
import { connect } from "react-redux";

import "./Budget.css";

class Budget extends Component {
  state = {
    orders: []
  };
  render() {
    return (
      <div className="budget">
        <h2>Бюджет</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
