import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "./actions";

const initialstate = {
    cartitems: []
}

const cartreducer = (state = initialstate, action) => {
    // console.log(action.type);
    switch (action.type) {
        case ADD_TO_CART:
            // console.log(state);
            let newstate = { ...state, cartitems: [...state.cartitems, action.payload] }
            // console.log(newstate);
            return newstate

        case REMOVE_FROM_CART:
            // console.log(state);
            return {
                ...state,
                cartitems: state.cartitems.filter(item => item.id !== action.payload)
            }

        case INCREMENT_QUANTITY:
            return {
                ...state,
                cartitems: state.cartitems.map(item => {
                    // console.log(item.id + action.payload.id);
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            }

        case DECREMENT_QUANTITY:
            return {
                ...state,
                cartitems: state.cartitems.map(item => {
                    if (item.id === action.payload && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    return item
                })
            }
        default:
            return state
    }
}

export default cartreducer