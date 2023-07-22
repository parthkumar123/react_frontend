import React, { useState } from 'react';
import './server-type-grid.css'; // Import the CSS file

const InfoPopup = ({ image, description }) => {
    return (
        <div className="info-popup">
            <img src={image} alt="Component" />
            <p>{description}</p>
        </div>
    );
};

const CardComponent = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const [infoPosition, setInfoPosition] = useState({ x: 0, y: 0 });

    const handleSelect = (item) => {
        setSelectedItem(item === selectedItem ? null : item);
    };

    const handleInfoIconHover = (e) => {
        setInfoPosition({ x: e.clientX, y: e.clientY });
        setShowInfo(true);
    };

    const handleInfoIconLeave = () => {
        setShowInfo(false);
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
                        <p className="description">{item.description}</p>
                        <span
                            className="info-icon"
                            onMouseEnter={handleInfoIconHover}
                            onMouseLeave={handleInfoIconLeave}
                        >
                            &#8505;
                        </span>
                    </div>
                    {item === selectedItem && <div className="tick-icon">✔</div>}
                    {showInfo && (
                        <InfoPopup
                            image={item.image}
                            description={item.description}
                            style={{ top: infoPosition.y + 10, left: infoPosition.x + 10 }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
