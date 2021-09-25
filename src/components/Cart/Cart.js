import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let beforeTax = 0;
    let tax = 0
    for (const product of cart) {
    total = total + product.price
    shipping = shipping + 5;
    beforeTax = total + shipping ;
    tax = (15/100) * beforeTax
    }
    
    return (
        <div>
            <div className="cart-header">
                <h2>Order Summary</h2>
                <p style={{fontSize:"20px", fontWeight:"500"}}>Item Ordered : {props.cart.length}</p>
            </div>
            <div className="calculation">
                <p>Items : ${total}</p>
                <p>Shipping & Handling: {shipping}</p>
                <p>Total before tax : {beforeTax}</p>
                <p>Estimated Tax: {tax}</p>
                <p>Order Total: {beforeTax + tax}</p>
            </div>
            <div className="cart-btn">
                <button className="Add-to-cart-btn" type="submit">Review Your Order</button>
            </div>
        </div>
    );
};

export default Cart;