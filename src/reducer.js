import * as a from "./actions"

// items
import cartItems from "./cart-items";



const initialStore = {
    cart: cartItems,
    // amount of items
    amount: 5,
    // Total amount
    total: 25
}

// Declaring the reducer initially
// reducer takes two arguments, current state and an action.
// Default state value for first call, when state is undefined.
const reducer = (state = initialStore, action) => {

    if (action.type === a.INCREASE) {
        console.log("Checking action are we?");

        // setting count to whatever it is +1
        // This is the standard way to return state, to respect the immutability principle and also make sure the rest of the object is also made back
        return { ...state, count: state.count + 1 }
    }
    if (action.type === a.DECREASE) {

        return { ...state, count: state.count - 1 }
    }
    if (action.type === a.REMOVE) {
        console.log("remove item");
        return { ...state }
    }
    if (action.type === a.CLEAR_ALL) {
        console.log(state);
        return { ...state }
    }

    // always at least return the original state, to not break functionality
    return state;
}

export default reducer;