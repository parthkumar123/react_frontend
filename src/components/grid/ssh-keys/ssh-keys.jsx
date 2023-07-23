import React from 'react';
import './ssh-keys.css'; // Import the CSS file
import addIcon from "../../../assests/images/icon-add.svg";

const CardComponent = () => {
    return (
        <>
            <div >
                <div className='ssh-header'>
                    <h1>SSH Keys</h1><a href='www.google.com'>(manage)</a> </div>
                <div className="ssh-card-component-container">
                    <div className="ssh-image-container">
                        <img src={addIcon} alt="Add Icon" />
                    </div>
                    <div className="ssh-info-container">
                        <div className="ssh-title">Add New</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardComponent;
