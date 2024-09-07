import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductList from './components/ProductList';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <ProductProvider>
                    <CartProvider>
                        <div className="App">
                            <Routes>  {/* Replace Switch with Routes */}
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Auth />} />
                                <Route path="/signup" element={<Auth />} />
                                <Route path="/products" element={<ProductList />} />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </div>
                    </CartProvider>
                </ProductProvider>
            </AuthProvider>
        </Router>
    );
};

export default App;
