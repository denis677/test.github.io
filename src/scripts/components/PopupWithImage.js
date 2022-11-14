import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupContainer, popTitle) {
    super(popupSelector);
    this.popupContainer = popupContainer;
    this.popTitle = popTitle;

  }

  open() {
    this.popupContainer.style = `background-image:url(${this.link})`;
    this.popTitle.textContent = this.name;
    super.open();
  }
}