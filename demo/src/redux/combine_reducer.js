import { combineReducers } from "redux";
import cartreducer from "./reducers";

 const allreducer = combineReducers({
    cart:cartreducer,
})

export default allreducer

