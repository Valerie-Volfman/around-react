import React from "react";
import api from "../utils/api";

function Card({ handleCardClick, card }) {
  
  // function handleClick() {
  //   handleCardClick.onCardClick(handleCardClick.card);
  // }
  console.log(card.link)
  return (
            <li className="card">
              <div
                style={{ backgroundImage: `url(${card.link})` }}
                // onClick={handleClick}
                className="card__picture"
              >
                <button
                  aria-label="delete"
                  type="button"
                  name="cardDeleteButton"
                  className="card__delete-button"
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
                  <span className="card__like-counter">{card.likes}</span>
                </div>
              </div>
            </li>
        
  );
}

export default Card;
