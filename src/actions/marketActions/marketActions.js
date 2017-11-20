import { MOVE_ORDER_TO_CUSTOMER } from "../marketTypes";

export const createOrder = payload => ({ type: CREATE_ORDER, payload });

export const moveOrderToFarm = payload => ({
  type: MOVE_ORDER_TO_FARM,
  payload
});
