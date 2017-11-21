import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";

const budgetInitState = {
  profit: 0,
  marketExpanse: 0,
  farmExpanse: 0,
  deliveryExpanse: 0
};

const budget = (state = budgetInitState, action) => {
  let returnResult = [];
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      returnResult = { deliveryExpanse: state.deliveryExpanse + 20 };
      break;
    case CREATE_ORDER:
      returnResult = { profit: state.profit + action.payload.price };
      break;
    case MOVE_ORDER_TO_FARM:
      returnResult = { farmExpanse: state.farmExpanse + 100 };
      break;
    default:
      returnResult = state;
  }
  return returnResult;
};

export default budget;
