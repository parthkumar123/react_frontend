import React, { useState } from 'react';
import './server-grid.css';

const ProductGrid = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`product-card ${selectedProduct === product ? 'selected' : ''}`}
                    onClick={() => handleProductClick(product)}
                >
                    {selectedProduct === product && (
                        <div className="selected-tick">
                            <span>&#10004;</span>
                        </div>
                    )}
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price-box">
                        <p className="product-price">Starting From <br />{product.price}</p>
                        <button className="add-button">{product.buttonTitle}</button>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default ProductGrid;
