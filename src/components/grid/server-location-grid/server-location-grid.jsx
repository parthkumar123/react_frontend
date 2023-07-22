import React, { useState } from 'react';
import './server-location-grid.css'; // Import the CSS file
import '../../navbar/navbar.css'; // Import the CSS file

const CardComponent = ({ items }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const handleSelect = (item) => {
        setSelectedCountry(item === selectedCountry ? null : item);
    };

    const [selectedItem, setSelectedItem] = useState(items[0].name);
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    return (
        <>
            <div className="App">
                <nav className="navbar">
                    <ul className="nav">
                        {
                            items.map((ele) => {
                                return (
                                    <li
                                        className={`nav-item ${selectedItem === ele.name ? 'active' : null}`}
                                        onClick={() => handleItemClick(ele.name)}
                                    >
                                        {ele.name}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
                <div className="content">
                    {selectedItem !== null && (
                        <div className="location-card-component-container">
                            {items.filter((ele) => ele.name === selectedItem)[0].details.map((item) => (
                                <div
                                    key={item.id}
                                    className={`location-card-component ${item === selectedCountry ? 'selected' : ''}`}
                                    onClick={() => handleSelect(item)}
                                >
                                    <div className="location-image-container">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="location-info-container">
                                        <div className="location-city">{item.city}</div>
                                        <div className="location-country">{item.country}</div>
                                        {item === selectedCountry && <div className="tick-icon">✔</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CardComponent;
