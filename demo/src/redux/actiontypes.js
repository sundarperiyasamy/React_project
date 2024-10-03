import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART, SUB_TOTAL } from "./actions";

export const addtocart = (item) =>{
    item.quantity = 1
    // console.log(item);
    return{
        type:ADD_TO_CART,
        payload:item,
    }
}

export const removefromcart = (id) =>{
    return{
        type:REMOVE_FROM_CART,
        payload:id
    }
}

export const incrementquantity = (index) => {
    return{
        type:INCREMENT_QUANTITY,
        payload:index
    }
}

export const decrementquantity = (index) => {
    return {
        type:DECREMENT_QUANTITY,
        payload:index
    }
}

export const subtotal = (id) => {
    return {
        type:SUB_TOTAL,
        payload:id
    }
}