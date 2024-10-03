import { createStore } from "redux";
import allreducer from "./combine_reducer";

 const store  = createStore(allreducer)

 export default store