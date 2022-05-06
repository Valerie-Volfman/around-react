import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../context/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleCardLike(card) {
    console.log(card);
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api.changeLikeCardStatus(card, isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUserUpdate(data) {
    api
      .editUserData(data)
      .then((res) => {
        setCurrentUser(res);
        console.log(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(data) {
    api
    .editProfilePic(data)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }
  return (
    <>
      <div className="page__wrapper">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onLikeClick={handleCardLike}
            cards={cards}
          />
          <Footer />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUserUpdate}
          />
          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            name="add-card"
            title="New place"
            onClose={closeAllPopups}
            buttonText="Save"
          >
            <input
              id="input_type_card-title"
              type="text"
              placeholder="Title"
              name="popupInputCardTitle"
              minLength="1"
              maxLength="30"
              required
              className="popup__input popup__input_type_card-title"
            />
            <span id="input_type_card-title-error" className="popup__error">
              Please fill out this field.
            </span>
            <input
              id="input_type_card-link"
              type="url"
              placeholder="Image link"
              name="popupInputCardLink"
              required
              className="popup__input popup__input_type_card-link"
            />
            <span id="input_type_card-link-error" className="popup__error">
              Please enter a web address.
            </span>
          </PopupWithForm>
          <section className="popup popup_type_remove-popup">
            <div className="popup__content">
              <button
                aria-label="close"
                type="button"
                name="popupAddCardCloseButton"
                className="popup__close-button"
              ></button>
              <h2 className="popup__title">Are you sure?</h2>
              <form
                id="delete-popup"
                name="removePopup"
                className="popup__form"
              >
                <button
                  form="delete-popup"
                  aria-label="save"
                  type="submit"
                  name="popupSaveButton"
                  className="popup__save-button"
                >
                  Yes
                </button>
              </form>
            </div>
          </section>
          <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
