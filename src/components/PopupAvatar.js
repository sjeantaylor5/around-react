import PopupWithForm from './PopupWithForm';

function PopupAvatar({ isOpen, onClose }) {

    return(
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        title='Change profile picture'
        submitName='Save'
        >
            <input id="avatar-url" className="popup__input popup__input_type_avatar" type="url" placeholder="Image link" name="link" required/>
            <span id="avatar-url-error" className="popup__error"/>
        </PopupWithForm>
    );
}

export default PopupAvatar;