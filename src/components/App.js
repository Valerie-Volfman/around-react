import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
    <div className="page__wrapper">
      <Header />
      <Main />
        <Footer />
        <section className="popup popup_type_edit-profile">
            <div className="popup__content">
                <button aria-label="close" type="button" name="popupEditProfileCloseButton"
                    className="popup__close-button"></button>
                <h2 className="popup__title">Edit profile</h2>
                <form name="editProfileForm" className="popup__form">
                    <input id="input_type_name" type="text" placeholder="Enter your first name" name="popupInputName"
                        minlength="2" maxlength="40" required className="popup__input popup__input_type_name" />
                    <span id="input_type_name-error" className="popup__error">Please fill out this field.</span>
                    <input id="input_type_profession" type="text" placeholder="Your profession"
                        name="popupInputProfession" minlength="2" maxlength="200" required
                        className="popup__input popup__input_type_profession" />
                    <span id="input_type_profession-error" className="popup__error">Please fill out this field.</span>
                    <button aria-label="save" type="submit" name="popupSaveButton"
                        className="popup__save-button popup__save-button_disabled">Save</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_add-card">
            <div className="popup__content">
                <button aria-label="close" type="button" name="popupAddCardCloseButton"
                    className="popup__close-button"></button>
                <h2 className="popup__title">New place</h2>
                <form name="addCardForm" className="popup__form">
                    <input id="input_type_card-title" type="text" placeholder="Title" name="popupInputCardTitle"
                        minlength="1" maxlength="30" required className="popup__input popup__input_type_card-title" />
                    <span id="input_type_card-title-error" className="popup__error">Please fill out this field.</span>
                    <input id="input_type_card-link" type="url" placeholder="Image link" name="popupInputCardLink"
                        required className="popup__input popup__input_type_card-link" />
                    <span id="input_type_card-link-error" className="popup__error">Please enter a web address.</span>
                    <button aria-label="save" type="submit" name="popupSaveButton"
                        className="popup__save-button popup__save-button_disabled">Create</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_image-popup">
            <div className="popup__image-wrap">
                <div className="popup__image">
                    <button aria-label="close" type="button" name="popupImageCloseButton"
                        className="popup__close-button"></button>
                    <h2 className="popup__image-title"></h2>
                </div>
            </div>
        </section>
        <section className="popup popup_type_remove-popup">
            <div className="popup__content">
                <button aria-label="close" type="button" name="popupAddCardCloseButton"
                    className="popup__close-button"></button>
                <h2 className="popup__title">Are you sure?</h2>
                <form id="delete-popup" name="removePopup" className="popup__form">
                    <button form="delete-popup" aria-label="save" type="submit" name="popupSaveButton"
                        className="popup__save-button">Yes</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_avatar-popup">
            <div className="popup__content">
                <button aria-label="close" type="button" name="popupAddCardCloseButton"
                    className="popup__close-button"></button>
                <h2 className="popup__title">Change profile picture</h2>
                <form name="avatarForm" className="popup__form">
                    <input id="input_type_avatar" type="url" placeholder="Image link" name="popupInputAvatar" required
                        className="popup__input popup__input_type_card-link" />
                    <span id="input_type_avatar-error" className="popup__error">Please enter a web address.</span>
                    <button aria-label="save" type="submit" name="popupSaveButton"
                        className="popup__save-button">Save</button>
                </form>
            </div>
        </section>
    </div>
    <template id="card-template">
        <li className="card">
            <div className="card__picture"><button aria-label="delete" type="button" name="cardDeleteButton"
                    className="card__delete-button"></button></div>
            <div className="card__box">
                <h2 className="card__name"></h2>
                <div className="card__like-frame">
                    <button aria-label="like" type="button" name="cardLike" className="card__like"></button>
                    <span className="card__like-counter"></span>
                </div>
            </div>
        </li>
    </template>
    </>
  );
}

export default App;
