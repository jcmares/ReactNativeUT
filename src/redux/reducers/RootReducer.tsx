import { combineReducers } from "redux";
import CommonReducer from './CommonReducer';

const RootReducer = combineReducers ({
    common : CommonReducer,
});

export default RootReducer;