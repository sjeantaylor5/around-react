import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useCards, useUserInfo } from '../utils/Utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupEditProfile from './PopupEditProfile';
import PopupAddCard from './PopupAddCard';
import PopupAvatar from './PopupAvatar';
import PopupDelete from './PopupDelete';
import { api } from '../utils/Api';

function App() {

    const [isEditProfileOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlaceOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeleteOpen, setIsDeletePopupOpen] = React.useState(false);
    const [isImageOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const userInfo = useUserInfo();
    const [cards, setCards] = useCards();

    function handleCardClick(card) {
      setSelectedCard(card);
      setIsImagePopupOpen(true);
    }

    function handleUpdateUser() {
      api.setUserInfo();
    }

    return (
        <div className="page">
            <Header />
              <Switch>
              <Route exact path='/'>
              <CurrentUserContext.Provider value={userInfo}>
                <Main
                  handleEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
                  handleAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
                  handleEditProfileClick={() => setIsEditProfilePopupOpen(true)}
                  cards={cards}
                  setCards={setCards}
                  handleCardClick={handleCardClick}
                />
                <PopupAvatar
                  isOpen={isEditAvatarOpen}
                  onClose={() => setIsEditAvatarPopupOpen(false)}
                />
                <PopupEditProfile
                  isOpen={isEditProfileOpen}
                  onClose={() => setIsEditProfilePopupOpen(false)}
                  onUpdateUser={handleUpdateUser}
                />
                <PopupAddCard
                  isOpen={isAddPlaceOpen}
                  onClose={() => setIsAddPlacePopupOpen(false)}
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
              </CurrentUserContext.Provider>
              </Route>
              </Switch>
            <Footer />
        </div>
    );
}

export default App;