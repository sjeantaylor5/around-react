import React from 'react';
import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ handleAddPlaceClick, handleEditAvatarClick, handleEditProfileClick, cards, handleCardClick, onCardLike, onDeleteCard  }) {
    const [userInfo] = React.useContext(CurrentUserContext);

    return(
        <main className="content">
            <section className="profile">
                <button onClick={handleEditAvatarClick} className="profile__avatar-btn" type="button">
                   <img className="profile__avatar" src={userInfo.avatar} alt="Cousteau Picture"/>
                   <img className="profile__avatar-img" src={editButton} alt="Edit Button"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__title">{userInfo.name}</h1>
                    <button onClick={handleEditProfileClick} className="profile__edit-btn" type="button">
                        <img className="profile__edit-img" src={editButton} alt="Edit Button"/>
                    </button>
                    <p className="profile__explorer">{userInfo.about}</p>
                </div>
                <button onClick={handleAddPlaceClick} className="profile__add-btn" type="button">
                    <img className="profile__add-img" src={addButton} alt="Plus sign"/>
                </button>
            </section>
            <section className="pictures">
                <ul className="pictures__list">
                    {cards.map(card => {
                        return <Card 
                        card={card}
                        key={card._id}
                        handleCardClick={handleCardClick}
                        onCardLike={onCardLike}
                        onDeleteCard={onDeleteCard}
                        />
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Main;