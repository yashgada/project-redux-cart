import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { createStore } from "redux";
import * as a from "./actions"
import { Provider } from "react-redux";
// items
import cartItems from "./cart-items";
// redux stuff
import reducer from "./reducer";





// Creating the global redux store
// Takes reducer function's REFERENCE, and optional default state value
const store = createStore(reducer)

// Use store.dipatch(...) to dispatch actions to change the state of the app
store.dispatch({ type: a.INCREASE })

// store here is complex object, like an interface, not a simply object from where you can directly retrieve values. Have to use functions like the following
// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <main>
        {/* Passing state down to Navbar to test connections */}
        <Navbar cart={store.getState().cart} />
        {/* passing down cart items for now, a default value for what the card should be */}
        <CartContainer cart={cartItems} />
      </main>
    </Provider>
  );
}

export default App;
