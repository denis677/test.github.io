import { buttonClose, buttonCloseForm, popupImageClose, profileButton } from '../utils/CardsArray.js';

export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
  }

  open() {
    this.popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      this.close();
    }
  }

  setEventListeners() {
    profileButton.addEventListener("click", () => {
      this.popupSelector.classList.add("popup_opened");
    });
    buttonClose.addEventListener("click", () => {
      this.close();
    });

    buttonCloseForm.addEventListener("click", () => {
      this.close();
    });

    popupImageClose.addEventListener("click", () => {
      this.close();
    });

    this.popupSelector.addEventListener('click', (e) => {
      if (e.target === this.popupSelector) {
        this.close();
      }
    });
  }
}