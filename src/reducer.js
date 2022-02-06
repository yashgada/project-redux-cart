import * as a from "./actions"

// items
import cartItems from "./cart-items";



const initialStore = {
    cart: cartItems,
    // amount of items
    amount: 3,
    // Total amount
    total: 25
}

// Declaring the reducer initially
// reducer takes two arguments, current state and an action.
// Default state value for first call, when state is undefined.
const reducer = (state = initialStore, action) => {

    if (action.type === a.INCREASE) {
        // console.log("Increase");
        const newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, amount: item.amount += 1 }
            }
            return item
        })
        // setting count to whatever it is +1
        // This is the standard way to return state, to respect the immutability principle and also make sure the rest of the object is also made back
        return { ...state, cart: newCart, amount: state.amount + 1 }
    }
    if (action.type === a.DECREASE) {
        console.log("Decrease");
        const newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, amount: item.amount -= 1 }
            }
            return item
        })
        // setting count to whatever it is +1
        // This is the standard way to return state, to respect the immutability principle and also make sure the rest of the object is also made back
        // return { ...state, cart: newCart }
        return { ...state, amount: state.amount - 1, cart: newCart }
    }
    if (action.type === a.REMOVE) {
        // console.log("remove item" + action.payload.id);
        const newCart = state.cart.filter((product) => product.id !== action.payload.id)
        return { ...state, cart: newCart }
    }
    if (action.type === a.CLEAR_ALL) {
        console.log(state);
        return { ...state, cart: [] }
    }
    if (action.type === a.CALC_AMOUNT) {
        const { total, amount } = state.cart.reduce((acc, item) => {
            let { amount, total } = acc
            total += item.amount * item.price
            amount += item.amount
            return { amount, total }
        }, { amount: 0, total: 0 })
        return { ...state, amount: amount, total: total }
    }

    // always at least return the original state, to not break functionality
    return state;
}

export default reducer;