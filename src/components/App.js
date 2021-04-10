import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import PopupAvatar from './PopupAvatar';
import PopupDelete from './PopupDelete';
import { useCards, useUserInfo } from '../utils/Utils';

function App() {

    const [isEditProfileOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlaceOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeleteOpen, setIsDeletePopupOpen] = React.useState(false);
    const [isImageOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [userInfo, setUserInfo] = useUserInfo();
    const [cards, setCards] = useCards();

    function handleCardClick(card) {
      setSelectedCard(card);
      setIsImagePopupOpen(true);
    }

    return (
        <div className="page">
          <Header />
          <Main
            handleEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
            handleAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
            handleEditProfileClick={() => setIsEditProfilePopupOpen(true)}
            cards={cards}
            userInfo={userInfo}
            handleCardClick={handleCardClick}
          />
          <PopupAvatar
            isOpen={isEditAvatarOpen}
            onClose={() => setIsEditAvatarPopupOpen(false)}
          />
          <PopupWithForm
            isOpen={isEditProfileOpen}
            onClose={() => setIsEditProfilePopupOpen(false)}
            title='Edit profile'
            name='profile'
            idName='profile-name'
            idSubtitle='profile-text'
            placeholderName='Name'
            placeholderSubtitle='About me'
            minLengthName='2'
            maxLengthName='40'
            minLengthSubtitle='2'
            maxLengthSubtitle='200'
            submitName='Save'
          />
          <PopupWithForm
            isOpen={isAddPlaceOpen}
            onClose={() => setIsAddPlacePopupOpen(false)}
            title='New Place'
            name='addpic'
            idName='pic-title'
            idSubtitle='pic-url'
            placeholderName='Title'
            placeholderSubtitle='Image link'
            minLengthName='1'
            maxLengthName='30'
            submitName='Create'
          />
          <ImagePopup
            isOpen={isImageOpen}
            card={selectedCard}
            onClose={() => setIsImagePopupOpen(false)}
          />
          <PopupDelete
            isOpen={isDeleteOpen}
            onClose={() => setIsDeletePopupOpen(false)}
          />
          <Footer />
        </div>
    );
}

export default App;