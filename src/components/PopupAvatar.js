import closeButton from '../images/Close-button.svg';

function PopupAvatar({ isOpen, onClose }) {
    return(
        <div className={`popup popup_type_avatar ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__overlay popup__overlay_type_avatar"></div>
            <form action="#" method="POST" className="popup__container popup__container_type_avatar" name="profileAvatar">
                <button onClick={onClose} className="popup__close-btn" type="button"><img className="popup__close-img" src={closeButton} alt="Close Button"/></button>
                <h3 className="popup__title">Change profile picture</h3>

                <input id="avatar-url" className="popup__input popup__input_type_avatar" type="url" placeholder="Image link" name="link" required/>
                <span id="avatar-url-error" className="popup__error"></span>

                <button type="submit" className="popup__submit">Save</button>
            </form>
        </div>
    );
}

export default PopupAvatar;