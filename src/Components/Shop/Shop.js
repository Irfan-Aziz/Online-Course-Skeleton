import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';

const Shop=()=>{
    const [products,setProducts]=useState(fakeData)
    const [cart,setCart]=useState([])
    const handleAddProduct=(product)=>{
       const newCart=[...cart,product]
       setCart(newCart);
    }
    return(
    <div className='shop'>
        
           <div className='item'>
           {products.map( product=><Courses products={product}
                        handleAddProduct={handleAddProduct}></Courses>)}
           </div>
        
        <div className="cart">
            <Cart cart={cart}></Cart>
        </div>
    </div>)
}
export default Shop;