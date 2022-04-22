import React from "react";

function ImagePopup({ selectedCard, closeAllPopups }) {
  return (
    <section
      isOpen={selectedCard}
      onClose={closeAllPopups}
      className="popup popup_type_image-popup"
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
