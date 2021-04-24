import React from 'react';
import closeButton from '../images/Close-button.svg';
import Popup from './Popup';
import { api } from '../utils/api';

function DeletePopup({ isOpen, onClose, cards, setCards, deleteId }) {
    const [isLoading, setIsLoading] = React.useState(false);
    
    function handleDeleteCard() {
        setIsLoading(true);

        api.removeCard(deleteId).then(() => {
          const newCards = cards.filter((c) => c._id !== deleteId)
          setCards(newCards);
          setIsLoading(false);
          onClose();
        });
      }

    return(
        <Popup isOpen={isOpen}>
            <form className="popup__container popup__container_type_delete" name="deleteCard">
                <button onClick={onClose} className="popup__close-btn" type="button"><img className="popup__close-img" src={closeButton} alt="Close Button"/></button>
                <h3 className="popup__title">Are you sure?</h3>
                <button onClick={handleDeleteCard} type="button" className="popup__submit popup__submit_type_delete">{isLoading ? 'Saving...' : 'Yes'}</button>
            </form>
        </Popup>
    );
}

export default DeletePopup;