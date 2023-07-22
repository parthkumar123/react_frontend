import React, { useState } from 'react';
import './server-size.css'; // Import the CSS file

const CardComponent = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item === selectedItem ? null : item);
    };

    return (
        <div className="description-component-container">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`description-component ${item === selectedItem ? 'selected' : ''}`}
                    onClick={() => handleSelect(item)}
                >
                    <div className="description-info-container">
                        <span>{item.priceDetails.storage}</span>
                        <span>{item.priceDetails.monthlyPrice}</span>
                        <span> {item.priceDetails.hourlyPrice}</span>
                        <span className="horizontal-line"></span>
                        <span> {item.specificationDetails.cpu}</span>
                        <span> {item.specificationDetails.memory}</span>
                        <span> {item.specificationDetails.bandwidth}</span>
                    </div>
                    {item === selectedItem && <div className="tick-icon">✔</div>}
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
