import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log('Fetching cart items...');
        fetch('http://localhost:5001/cart')  // Connect to backend API
            .then(response => {
                console.log('Cart Response:', response)
                return response.json();
            })
            .then(data => {
                console.log('Cart Items: ', data);
                setCartItems(data)
            })
            .catch(error => console.error('Error fetching cart:', error));
    }, []);

    return (
        <div>
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default CartPage;