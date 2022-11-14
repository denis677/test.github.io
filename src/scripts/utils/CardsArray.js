export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup-form__input_type_error',
  errorClass: 'popup-form__input-error-visible'
};

export const buttonEdit = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".profile-popup");
export const buttonClose = popupEdit.querySelector(".profile-close");

export const formEditElement = document.querySelector(".profile-form");
export const buttonEditSave = document.querySelector(".profile-submit-button");
export const divElementTitle = document.querySelector(".profile__title");
export const divElementSubtitle = document.querySelector(".profile__subtitle");
export const authorInput = document.querySelector(".profile-field-auhtor");
export const nameInput = document.querySelector(".profile-field-name");

export const profileButton = document.querySelector(".profile__button");
export const popupForm = document.querySelector(".card-popup");
export const buttonCloseForm = document.querySelector(".card-close");
export const popupButtonSaveForm = document.querySelector(
  ".card-submit-button"
);

export const itemListWrapper = document.querySelector(".elements");
export const template = document.getElementById("form-elements");
export const formCreate = document.querySelector(".card-form");
export const theNameInput = document.querySelector(".card-field-auhtor");
export const linkInput = document.querySelector(".card-field-name");

export const popupImage = document.querySelector(".image-popup");
export const popupImageClose = document.querySelector(".image-close");
export const popupImageContainer = document.querySelector(".image-container");
export const popupTitle = document.querySelector(".image-edit-popup");

export const formValidators = {};

