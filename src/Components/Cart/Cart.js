import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart=props.cart
    console.log(cart)

    const tprice=cart.reduce((total,prd)=>total+prd.price,0)
    
    return (
        <div className='cart-details'>
            <h3>Items Added: {cart.length}</h3>
            <h5>Price: ${tprice}</h5>
        </div>
    );
};

export default Cart;