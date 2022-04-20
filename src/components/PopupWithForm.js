import React from "react";

function PopupWithForm({ name, title, children, onClose, isOpen }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup__is-opened" : ""}`}>
      <div className="popup__content">
        <button
        onClick={onClose}
          aria-label="close"
          type="button"
          name="popupEditProfileCloseButton"
          className="popup__close-button"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form name="`${name}`" className="popup__form">
            {children}
          <button
            aria-label="save"
            type="submit"
            name="popupSaveButton"
            className="popup__save-button popup__save-button_disabled"
          >Save
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;