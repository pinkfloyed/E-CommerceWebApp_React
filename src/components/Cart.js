import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                <div>
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span className="item-name">{item.name}</span>
                                <span className="item-price">${item.price.toFixed(2)}</span>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    className="item-quantity"
                                />
                                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
