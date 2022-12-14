import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, validationConfig, {callbackSubmit}) {
    super(popupSelector);
    this._callBackSubmit = callbackSubmit;
    this._popupForm = this.popupSelector.querySelector(validationConfig.formSelector);
    this._inputList = Array.from(this._popupForm.querySelectorAll(validationConfig.inputSelector));
  }

  _getInputValues = () => {
    const inputValues = {};
    this._inputList.forEach( (input) => {
      inputValues[input.name.slice(6)] = input.value;
    });
    return inputValues;
  }

  _setValues = (evt) => {
    evt.preventDefault();
    this._callBackSubmit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._setValues);
    
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

