import React, { useContext, useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import './ProductList.css';

const ProductList = () => {
    const { products, setProducts } = useContext(ProductContext);
    const { addToCart, updateQuantity, removeFromCart } = useCart();
    const [newProduct, setNewProduct] = useState({ name: '', price: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const handleCreateProduct = () => {
        if (newProduct.name && newProduct.price) {
            const newProductData = {
                id: products.length + 1,
                name: newProduct.name,
                price: parseFloat(newProduct.price),
            };
            setProducts(prevProducts => [...prevProducts, newProductData]);
            setNewProduct({ name: '', price: '' });
        }
    };

    return (
        <div className="product-list-container">
            <h2>Product List</h2>
            <div className="product-form">
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="product-input"
                />
                <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    placeholder="Product Price"
                    className="product-input"
                />
                <button 
                    onClick={handleCreateProduct}
                    className="create-button"
                >
                    Create Product
                </button>
            </div>
            {products.length > 0 ? (
                <ul className="product-list">
                    {products.map((product) => (
                        <li key={product.id} className="product-item">
                            <span className="product-name">{product.name}</span>
                            <span className="product-price">${product.price.toFixed(2)}</span>
                            <button 
                                onClick={() => addToCart(product)} 
                                className="add-to-cart-button"
                            >
                                Add to Cart
                            </button>
                            {/* Additional buttons */}
                            <button 
                                onClick={() => updateQuantity(product.id, 1)} 
                                className="update-button"
                            >
                                Update Quantity
                            </button>
                            <button 
                                onClick={() => removeFromCart(product.id)} 
                                className="delete-button"
                            >
                                Remove from Cart
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
};

export default ProductList;
