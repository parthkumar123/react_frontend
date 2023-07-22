import React, { useState } from 'react';
import './server-type.css'; // Import the CSS file

const InfoPopup = ({ image, name, description }) => {
    return (
        <div className="info-popup">
            <img src={image} alt="Component" />
            <p>{name}</p>
            {/* <p>{description}</p> */}
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
        <div className="type-card-component-container">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`type-card-component ${item === selectedItem ? 'selected' : ''}`}
                    onClick={() => handleSelect(item)}
                >
                    <div className="type-image-container">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="type-info-container">
                        <p className="type-description">{item.name}</p>
                        <span
                            className="type-info-icon"
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
                            name={item.name}
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
