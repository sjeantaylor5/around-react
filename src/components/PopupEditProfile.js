import PopupWithForm from './PopupWithForm';

function PopupEditProfile({ isOpen, onClose }) {

    return(
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        title='Edit profile'
        submitName='Save'
        >
            <input
            id='profile-name'
            className="popup__input"
            type="text"
            placeholder='Name'
            name="name"
            required
            maxLength='40'
            minLength='2'
            />
            <span
            id='profile-name-error'
            className="popup__error"
            />

            <input
            id='profile-text'
            className="popup__input"
            type="text"
            placeholder='About me'
            name="description"
            required
            maxLength='200'
            minLength='2'
            />
            <span
            id='profile-text-error'
            className="popup__error"
            />

        </PopupWithForm>
    );
}

export default PopupEditProfile;