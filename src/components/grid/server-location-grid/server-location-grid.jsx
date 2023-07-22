import React, { useState } from 'react';
import './server-location-grid.css'; // Import the CSS file

const CardComponent = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item === selectedItem ? null : item);
    };

    return (
        <div className="card-component-container">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`card-component ${item === selectedItem ? 'selected' : ''}`}
                    onClick={() => handleSelect(item)}
                >
                    <div className="image-container">
                        <img src={item.image} alt="Image" />
                    </div>
                    <div className="info-container">
                        <div className="city">{item.city}</div>
                        <div className="country">{item.country}</div>
                        {item === selectedItem && <div className="tick-icon">✔</div>}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CardComponent;
