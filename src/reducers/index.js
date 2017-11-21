import { combineReducers } from "redux";
import market from "./market";
import farm from "./farm";
import budget from "./budget";

export default combineReducers({
  budget,
  farm,
  market
});
