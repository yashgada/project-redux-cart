import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import * as a from "../actions"
// import { CLEAR_ALL } from "../actions"

const CartContainer = ({ cart = [], total, dispatch }) => {
  // gave a default value to cart, in case it is undefined for any reason

  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  // if Cart is not empty, show items in cart
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      {/* Give articles for each cart item */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            {/* Place-holder, 0 for now */}
            total <span>₹{total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch({ type: a.CLEAR_ALL })} > clear cart</button>
      </footer>
    </section >
  );
};

const mapStateToProps = (state) => {
  const { amount, total, cart } = state
  return { amount, total, cart }
}

export default connect(mapStateToProps)(CartContainer);
