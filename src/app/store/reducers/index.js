import { combineReducers } from "redux";
import login from "./LoginReducer";
import values from "./collectAllValues";
import tasks from "./tasksReducer";
import total_cost from "./calculate";
import characteristics from "./characteristicsReducer";
export default combineReducers({
  login,
  values,
  tasks,
  total_cost,
  characteristics
})

