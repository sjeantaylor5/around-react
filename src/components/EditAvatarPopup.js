import React from 'react';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/api';

function EditAvatarPopup({ isOpen, onClose, setUserInfo }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [input, setInput] = React.useState('');

    function handleOnChange(e) {
        setInput(e.target.value);
    }

    function handleAvatarSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        api.setUserAvatar(input).then(res => {
            setUserInfo(res);
            onClose();
            setInput('');
            setIsLoading(false);
        })
    }

    return(
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleAvatarSubmit}
        title='Change profile picture'
        submitName={isLoading ? 'Saving...' : 'Save'}
        >
            <input value={input} onChange={handleOnChange} id="avatar-url" className="popup__input popup__input_type_avatar" type="url" placeholder="Image link" name="link" required/>
            <span id="avatar-url-error" className="popup__error"/>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;