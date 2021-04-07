import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import PopupAvatar from './PopupAvatar';
import PopupDelete from './PopupDelete';

function App() {

    const [onEditProfile, isEditProfilePopupOpen] = React.useState(false);
    const [onAddPlace, isAddPlacePopupOpen] = React.useState(false);
    const [onEditAvatar, isEditAvatarPopupOpen] = React.useState(false);
    const [onDelete, isDeletePopupOpen] = React.useState(false);
    const [onImage, isImagePopupOpen] = React.useState(false);

    return (
        <div className="page">
          <Header />
          <Main
            handleEditAvatarClick={() => isEditAvatarPopupOpen(true)}
            handleAddPlaceClick={() => isAddPlacePopupOpen(true)}
            handleEditProfileClick={() => isEditProfilePopupOpen(true)}
          />
          <PopupAvatar
            isOpen={onEditAvatar}
            onClose={() => isEditAvatarPopupOpen(false)}
          />
          <PopupWithForm
            isOpen={onEditProfile}
            onClose={() => isEditProfilePopupOpen(false)}
            title='Edit profile'
            name='profile'
            idName='profile-name'
            idSubtitle='profile-text'
            placeholderName='Name'
            placeholderSubtitle='About me'
            minlengthName='2'
            maxlengthName='40'
            minlengthSubtitle='2'
            maxlengthSubtitle='200'
            submitName='Save'
          />
          <PopupWithForm
            isOpen={onAddPlace}
            onClose={() => isAddPlacePopupOpen(false)}
            title='New Place'
            name='addpic'
            idName='pic-title'
            idSubtitle='pic-url'
            placeholderName='Title'
            placeholderSubtitle='Image link'
            minlengthName='1'
            maxlengthName='30'
            submitName='Create'
          />
          <ImagePopup
            isOpen={onImage}
            onClose={() => isImagePopupOpen(false)}
          />
          <PopupDelete
            isOpen={onDelete}
            onClose={() => isDeletePopupOpen(false)}
          />
          <Footer />
        </div>
    );
}

export default App;