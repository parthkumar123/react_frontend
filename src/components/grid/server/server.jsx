import React, { useState } from 'react';
import './server.css';

const ProductGrid = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <>
            <h1>Choose Server</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={`product-card ${selectedProduct === product ? 'selected' : ''}`}
                        onClick={() => handleProductClick(product)}
                    >
                        <div className="product-image" ><img src={product.image} alt={product.title} /></div>
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price-box">
                            <p className="product-price">Starting From <br />{product.price}</p>
                            <button
                                className="add-button"
                                onClick={() => handleProductClick(product)}
                            >
                                {product.buttonTitle}
                            </button>
                        </div>
                        {selectedProduct === product && <div className="tick-icon">✔</div>}
                    </div>
                ))
                }
            </div >
        </>

    );
};

export default ProductGrid;
