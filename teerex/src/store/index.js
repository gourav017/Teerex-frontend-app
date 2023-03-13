import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { addCartReducer } from "./addCart/addCart.reducer";


const rootReducer = combineReducers({
    cart:addCartReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))