import React from 'react';
import './server-label.css'; // Import the CSS file

const InputBox = () => {

    return (
        <>
            <h1>Server Hostname & Label</h1>
            <div className="input-row">
                <input type="text" className="input-field" placeholder="Enter server hostname" />
                <input type="text" className="input-field" placeholder="Enter server label" />
            </div>
        </>
    );
};

export default InputBox;
