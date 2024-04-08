import React from "react";
import '../styles/global-styles.css';

const Modal = ({book, onClose}) => {

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={book.image} alt={book.title}/>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.description}</p>
            </div>
        </div>
    );
};

export default Modal;
