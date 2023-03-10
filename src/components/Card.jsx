import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card({ cardData, onCardClick, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardData.owner._id === currentUser._id;
  const isLiked = cardData.likes.some(user => user._id === currentUser._id);
  const cardLikeButtonClassName = (`button element__button ${isLiked && 'element__button_active'}`);


  function handleClick() {
    return onCardClick(cardData);
  }

  function handleLikeButtonOnClick() {
    return onCardLike(cardData);
  }

  return (
      <article className="element">
        <div className="element__image" style={{ backgroundImage: `url(${cardData.link})` }} onClick={handleClick}></div>
        {isOwn && <button className="button element__button-bin" type="button" />}
        <div className="element__container">
          <h2 className="element__title">{cardData.name}</h2>
          <div className="element__like">
            <button className={cardLikeButtonClassName} type="button" onClick={handleLikeButtonOnClick}></button>
            <span className="element__counter">{cardData.likes.length}</span>
          </div>
        </div>
      </article>
  );
}

export default Card;