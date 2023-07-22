import React, { useState } from 'react';
import './server-location-grid.css'; // Import the CSS file

const CardComponent = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item === selectedItem ? null : item);
    };

    return (
        <div className="location-card-component-container">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`location-card-component ${item === selectedItem ? 'selected' : ''}`}
                    onClick={() => handleSelect(item)}
                >
                    <div className="location-image-container">
                        <img src={item.image} alt="Image" />
                    </div>
                    <div className="location-info-container">
                        <div className="location-city">{item.city}</div>
                        <div className="location-country">{item.country}</div>
                        {item === selectedItem && <div className="tick-icon">✔</div>}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CardComponent;
