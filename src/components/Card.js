import React from 'react';

function Card({ card, handleCardClick }) {

    function handleClick() {
        handleCardClick(card);
      } 

    return(
        <li class="pictures__picture picture" >
          <button class="pictures__trash" type="button"/>
            <img  class="pictures__image" src={card.link} alt={card.name} onClick={handleClick} />
            <h2 class="pictures__title">{card.name}</h2>
            <div class="pictures__box">
                <button class="pictures__like" type="button"/>
                <p class="pictures__counter">{card.likes.length}</p>
            </div>
        </li>
    )
}

export default Card;