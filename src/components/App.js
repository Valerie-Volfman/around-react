import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name="edit-profile"
          title="Edit Profile"
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <input
            id="input_type_name"
            type="text"
            placeholder="Enter your first name"
            name="popupInputName"
            minLength="2"
            maxLength="40"
            required
            className="popup__input popup__input_type_name"
          />
          <span id="input_type_name-error" className="popup__error">
            Please fill out this field.
          </span>
          <input
            id="input_type_profession"
            type="text"
            placeholder="Your profession"
            name="popupInputProfession"
            minLength="2"
            maxLength="200"
            required
            className="popup__input popup__input_type_profession"
          />
          <span id="input_type_profession-error" className="popup__error">
            Please fill out this field.
          </span>
        </PopupWithForm>
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
            <form id="delete-popup" name="removePopup" className="popup__form">
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
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name="avatar-popup"
          title="Change profile picture"
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <input
            id="input_type_avatar"
            type="url"
            placeholder="Image link"
            name="popupInputAvatar"
            required
            className="popup__input popup__input_type_card-link"
          />
          <span id="input_type_avatar-error" className="popup__error">
            Please enter a web address.
          </span>
        </PopupWithForm>
      </div>
    </>
  );
}

export default App;
