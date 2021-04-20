import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function PopupEditProfile({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    const userInfo = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(userInfo.name);
        setDescription(userInfo.about);
    }, [userInfo]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
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
            name={name}
            required
            maxLength='40'
            minLength='2'
            onChange={handleChangeName}
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
            name={description}
            required
            maxLength='200'
            minLength='2'
            onChange={handleChangeDescription}
            />
            <span
            id='profile-text-error'
            className="popup__error"
            />

        </PopupWithForm>
    );
}

export default PopupEditProfile;