import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useCards, useUserInfo } from '../utils/utils';
import { api } from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeletePopup from './DeletePopup';

function App() {

    const [isEditProfileOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlaceOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeleteOpen, setIsDeletePopupOpen] = React.useState(false);
    const [isImageOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [deleteId, setDeleteId] = React.useState('');
    const [userInfo, setUserInfo] = useUserInfo();
    const [cards, setCards] = useCards();

    function handleCardClick(card) {
      setSelectedCard(card);
      setIsImagePopupOpen(true);
    }

    function onCardLike(card) {
      const isLiked = card.likes.some(i => i._id === userInfo._id);
      
      api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }

    return (
        <div className="page">
            <Header />
              <CurrentUserContext.Provider value={userInfo}>
                <Main
                  handleEditAvatarClick={() => setIsEditAvatarPopupOpen(true)}
                  handleAddPlaceClick={() => setIsAddPlacePopupOpen(true)}
                  handleEditProfileClick={() => setIsEditProfilePopupOpen(true)}
                  handleOpenPopupDelete={() => setIsDeletePopupOpen(true)}
                  handleCardClick={handleCardClick}
                  onCardLike={onCardLike}
                  setDeleteId={setDeleteId}
                  cards={cards}
                />
                <EditAvatarPopup
                  isOpen={isEditAvatarOpen}
                  onClose={() => setIsEditAvatarPopupOpen(false)}
                  setUserInfo={setUserInfo}
                />
                <EditProfilePopup
                  isOpen={isEditProfileOpen}
                  onClose={() => setIsEditProfilePopupOpen(false)}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                />
                <AddPlacePopup
                  isOpen={isAddPlaceOpen}
                  onClose={() => setIsAddPlacePopupOpen(false)}
                  cards={cards}
                  setCards={setCards}
                />
                <ImagePopup
                  isOpen={isImageOpen}
                  card={selectedCard}
                  onClose={() => setIsImagePopupOpen(false)}
                />
                <DeletePopup
                  isOpen={isDeleteOpen}
                  onClose={() => setIsDeletePopupOpen(false)}
                  cards={cards}
                  setCards={setCards}
                  deleteId={deleteId}
                />
              </CurrentUserContext.Provider>
            <Footer />
        </div>
    );
}

export default App;