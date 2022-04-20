import React from "react";

function PopupWithForm({ name, title, isOpen }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__content">
        <button
          aria-label="close"
          type="button"
          name="popupEditProfileCloseButton"
          className="popup__close-button"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form name="`${name}`" className="popup__form">
          <button
            aria-label="save"
            type="submit"
            name="popupSaveButton"
            className="popup__save-button popup__save-button_disabled"
          >
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;