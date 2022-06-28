import { createStore, combineReducers } from "redux";
import { categoryReducer, productsReducer } from "./reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productsReducer,
});

export default createStore(rootReducer);
