import React from "react";

function ImagePopup({ closeAllPopups, card }) {
  return (
    <section
      onClose={closeAllPopups}
      className={`popup popup_type_image-popup ${card && "popup__is-opened"}`}
    >
      <div className="popup__image-wrap">
        <div className="popup__image">
          <button
            aria-label="close"
            type="button"
            name="popupImageCloseButton"
            className="popup__close-button"
          ></button>
          <h2 className="popup__image-title"></h2>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
