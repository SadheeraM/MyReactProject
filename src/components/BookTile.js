import React, {useState} from "react";
import Modal from "./Modal";

const BookTile = ({book}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="tile">
            <img src={book.image} alt={book.title} onClick={openModal}/>
            {showModal && <Modal book={book} onClose={closeModal}/>}
        </div>
    );
};

export default BookTile;
