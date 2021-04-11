import PopupWithForm from './PopupWithForm';

function PopupAddCard({ isOpen, onClose }) {

    return(
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        title='New Place'
        submitName='Create'
        >
            <input
            id='pic-title'
            className="popup__input"
            type="text"
            placeholder='Title'
            name='addpic'
            required
            maxLength='30'
            minLength='1'
            />
            <span
            id='pic-title-error'
            className="popup__error"
            />

            <input
            id='pic-url'
            className="popup__input"
            type="url"
            placeholder='Image link'
            name="link"
            required
            />
            <span
            id='pic-url-error'
            className="popup__error"
            />

        </PopupWithForm>
    );
}

export default PopupAddCard;