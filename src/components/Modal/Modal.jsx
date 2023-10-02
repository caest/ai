import React from 'react';
import './modal.scss';

const Modal = ({ content, onClose }) => {
    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal-overlay') onClose();
    };

    return (
        <div className="modal-overlay" onClick={handleOutsideClick}>
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    <span></span>
                    <span></span>
                </button>
                {content}
            </div>
        </div>
    );
};

export default Modal;
