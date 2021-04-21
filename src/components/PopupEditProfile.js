import React from 'react';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/api';

function PopupEditProfile({ isOpen, onClose, userInfo, setUserInfo }) {
    const [inputs, setInputs] = React.useState({ name: userInfo.name, description: userInfo.about });

    function handleOnChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.updateUserInfo(inputs.name, inputs.description).then(res => {
            setUserInfo(res);
            onClose();
        })
    }

    return(
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
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
            value={inputs.name}
            onChange={handleOnChange}
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
            value={inputs.description}
            onChange={handleOnChange}
            />
            <span
            id='profile-text-error'
            className="popup__error"
            />

        </PopupWithForm>
    );
}

export default PopupEditProfile;