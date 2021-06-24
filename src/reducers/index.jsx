import { combineReducers } from "redux";
import { createContactReducer } from "./createContactReducer";

const reducers = combineReducers({
  contacts: createContactReducer,
});

export default reducers;
