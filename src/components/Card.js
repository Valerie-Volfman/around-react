import React from "react";
import api from "../utils/api";

function Card({ handleCardClick }) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function handleClick() {
    handleCardClick.onCardClick(handleCardClick.card);
  }
  return (
    <section className="places">
      <ul className="places__cards">
        {cards.map((item) => (
          <template key={item._id} card={item} id="card-template">
            <li className="card">
              <div
                style={{ backgroundImage: `url(${cards.link})` }}
                onClick={handleClick}
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
                <h2 className="card__name">{cards.name}</h2>
                <div className="card__like-frame">
                  <button
                    aria-label="like"
                    type="button"
                    name="cardLike"
                    className="card__like"
                  ></button>
                  <span className="card__like-counter">{cards.likes}</span>
                </div>
              </div>
            </li>
          </template>
        ))}
      </ul>
    </section>
  );
}

export default Card;
