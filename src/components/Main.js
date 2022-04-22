import React from "react";
import editAvatarIcon from "../images/Avatar.svg";
import api from "../utils/api";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  handleCardClick,
}) {
  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setUserName(res);
        setUserAvatar(res);
        setUserDescription(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    <main className="main">
      <section className="profile">
        <div className="profile__pic-wrapper">
          <img
            className="profile__pic-icon"
            aria-label="edit"
            type="submit"
            name="avatarButton"
            src={editAvatarIcon}
            alt="icon"
          />
          <div
            onClick={onEditAvatarClick}
            className="profile__pic"
            style={{ backgroundImage: `url(${userAvatar.avatar})` }}
          ></div>
        </div>
        <div className="profile__container">
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__value profile__value_type_name">
                {userName.name}
              </h1>
              <button
                onClick={onEditProfileClick}
                aria-label="edit"
                type="submit"
                name="editButton"
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__value profile__value_type_profession">
              {userDescription.about}
            </p>
          </div>
        </div>
        <button
          onClick={onAddPlaceClick}
          aria-label="add"
          type="submit"
          name="profileAddButton"
          className="profile__add-button"
        ></button>
      </section>
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
    </main>
  );
}

export default Main;
