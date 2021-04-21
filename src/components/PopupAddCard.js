import React from 'react';
import { api } from '../utils/api';
import PopupWithForm from './PopupWithForm';

function PopupAddCard({ isOpen, onClose, cards, setCards }) {
    const [inputs, setInputs] = React.useState({ name: '', link: '' });

    function handleAddCardSubmit(e) {
        e.preventDefault();

        api.addCard(inputs.name, inputs.link).then(newCard => {
            setCards([newCard, ...cards]);
            setInputs({ name: '', link: '' });
            onClose();
        });
    }

    function handleOnChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    return(
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleAddCardSubmit}
        title='New Place'
        submitName='Create'
        >
            <input
            id='pic-title'
            className="popup__input"
            type="text"
            placeholder='Title'
            name="name"
            required
            maxLength='30'
            minLength='1'
            value={inputs.name}
            onChange={handleOnChange}
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
            value={inputs.link}
            onChange={handleOnChange}
            />
            <span
            id='pic-url-error'
            className="popup__error"
            />

        </PopupWithForm>
    );
}

export default PopupAddCard;