import React, { createContext, useEffect, useState } from 'react';
import productData from '../data/products.json';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData);
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };
