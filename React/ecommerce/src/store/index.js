import { createStore, combineReducers ,applyMiddleware} from "redux";
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import thunk from "redux-thunk"


const reducer = combineReducers({
    cart: cartReducer,
    categories : categoriesReducer
})

const store = createStore(reducer,applyMiddleware(thunk));

export default store;


// dispatch without thunk can handle only action objects
// dispatch with thunk can handle both action objects and action fnctions(asynchronous)