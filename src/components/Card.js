import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, handleCardClick, onCardLike }) {
    const [userInfo] = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === userInfo._id;
    const isLiked = card.likes.some(i => i._id === userInfo._id);

    const cardLikeButton = (
      `pictures__like ${isLiked ? 'pictures__like_active' : 'pictures__like'}`
    );

    function handleClick() {
        handleCardClick(card);
      };
    
    function handleLikeClick() {
      onCardLike(card);
    }  

    return(
        <li className="pictures__picture picture" >
          {isOwn ? <button className="pictures__trash" type="button"/> : null}
            <img  className="pictures__image" src={card.link} alt={card.name} onClick={handleClick} />
            <h2 className="pictures__title">{card.name}</h2>
            <div className="pictures__box">
                <button className={cardLikeButton} type="button" onClick={handleLikeClick}/>
                <p className="pictures__counter">{card.likes.length}</p>
            </div>
        </li>
    )
}

export default Card;