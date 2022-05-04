import React from "react";

function ImagePopup({ closeAllPopups, card}) {
  console.log(card)
  return (
    <section
      onClose={closeAllPopups}
      className={`popup popup_type_image-popup ${card && "popup__is-opened"}`}
    >
      <div className="popup__image-wrap">
        <div
        style={{ backgroundImage: `url(${card.link})` }}
         className="popup__image">
          <button
            aria-label="close"
            type="button"
            name="popupImageCloseButton"
            className="popup__close-button"
          ></button>
          <h2 className="popup__image-title">{card.name}</h2>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
