import React from "react";
import CurrentUserContext from "../context/CurrentUserContext";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  const currentUser = React.useContext(CurrentUserContext);
  // Checking if the current user is the owner of the current card
const isOwn = card.owner._id === currentUser._id;

// Creating a variable which you'll then set in `className` for the delete button
const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
); 
  return (
    <li className="card">
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
        className="card__picture"
      >
        <button
          aria-label="delete"
          type="button"
          name="cardDeleteButton"
          className="card__delete-button"
          onClick={cardDeleteButtonClassName}
        ></button>
      </div>
      <div className="card__box">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-frame">
          <button
            aria-label="like"
            type="button"
            name="cardLike"
            className="card__like"
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
