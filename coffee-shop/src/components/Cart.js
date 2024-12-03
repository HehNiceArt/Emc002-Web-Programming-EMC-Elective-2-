import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
    const removeFromCart = (id) => {
        fetch(`http://localhost:5001/cart/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(error => console.error('Error removing from cart:', error));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <>
                                {item.productName} - {item.quantity} x ${item.price}
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;

