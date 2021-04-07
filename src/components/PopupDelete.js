import closeButton from '../images/Close-button.svg';

function PopupDelete({ isOpen, onClose }) {
    return(
        <div className={`popup popup_type_delete ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__overlay popup__overlay_type_delete"></div>
            <form action="#" method="POST" className="popup__container popup__container_type_delete" name="deleteCard">
                <button onClick={onClose} className="popup__close-btn" type="button"><img className="popup__close-img" src={closeButton} alt="Close Button"/></button>
                <h3 className="popup__title">Are you sure?</h3>
                <button type="button" className="popup__submit popup__submit_type_delete">Yes</button>
            </form>
        </div>
    );
}

export default PopupDelete;