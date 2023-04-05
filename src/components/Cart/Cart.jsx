import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {
    // const cart = props.cart; //option -1;
    // const {cart} = props; //option -2;

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        // product.quantity = product.quantity || 1 ;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        // quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items :{cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
 {/* ------------------button section  -----------------*/}
            <button className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <button className='btn-review-cart'>
                <span>Review Order</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Cart;