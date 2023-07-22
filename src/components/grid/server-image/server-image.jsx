import React, { useState } from 'react';
import './server-image.css'; // Import the CSS file
import '../../navbar/navbar.css'; // Import the CSS file

const CardComponent = ({ items }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleSelect = (item) => {
        setSelectedImage(item === selectedImage ? null : item);
    };
    const [selectedVersion, setSelectedVersion] = useState(null);

    const handleVersionSelect = (e) => {
        setSelectedVersion(e.target.value);
    };
    const [selectedItem, setSelectedItem] = useState(items[0].imageType);
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
                                        className={`nav-item ${selectedItem === ele.imageType ? 'active' : null}`}
                                        onClick={() => handleItemClick(ele.imageType)}
                                    >
                                        {ele.imageType}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
                <div className="content">
                    {selectedItem !== null && (
                        <div className="serverimage-card-component-container">
                            {items.filter((ele) => ele.imageType === selectedItem)[0].details.map((item) => (
                                <div
                                    key={item.id}
                                    className={`serverimage-card-component ${item === selectedImage ? 'selected' : ''}`}
                                    onClick={() => handleSelect(item)}
                                >
                                    <div className="serverimage-image-container">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="serverimage-info-container">
                                        <div className="serverimage-name">
                                            <div>{item.name}</div>
                                            <div> {Array.isArray(item?.version) ? (
                                                <div className="version">
                                                    {selectedVersion ? (
                                                        <div>
                                                            {selectedVersion}
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <select value={selectedVersion} onChange={handleVersionSelect}>
                                                        <option value="">Select Version</option>
                                                        {item.version.map((v) => (
                                                            <option key={v} value={v}>
                                                                {v}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            ) : item.version}</div>
                                        </div>
                                        {
                                            item === selectedImage
                                            && (Array.isArray(item?.version)
                                                ? (selectedVersion !== "" && selectedVersion !== null ? true : false)
                                                : true)
                                            && <div className="tick-icon">✔</div>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div >
        </>
    );
};

export default CardComponent;
