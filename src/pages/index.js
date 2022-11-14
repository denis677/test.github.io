import { initialCards,
        validationConfig,
        buttonEdit,
        popupEdit,
        buttonClose,
        formEditElement,
        buttonEditSave,
        divElementTitle,
        divElementSubtitle,
        authorInput,
        nameInput,
        profileButton,
        popupForm,
        buttonCloseForm,
        popupButtonSaveForm,
        itemListWrapper,
        template,
        formCreate,
        theNameInput,
        linkInput,
        popupImage,
        popupImageClose,
        popupImageContainer,
        popupTitle,
        formValidators
      } from '../scripts/utils/CardsArray.js';
import { Card } from '../scripts/components/card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserUnfo from '../scripts/components/UserUnfo.js';
import './index.css';

//? Функция открытия попапа + еще вещаем обработчик на еск



function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  divElementTitle.textContent = authorInput.value;
  divElementSubtitle.textContent = nameInput.value;
}

formEditElement.addEventListener("submit", handleProfileFormSubmit);

//! Открытие формы ЖАКА (редактирования прифиля)
buttonEdit.addEventListener("click", () => {
  openPopup(popupEdit);
  authorInput.value = divElementTitle.textContent;
  nameInput.value = divElementSubtitle.textContent;
  formValidators["edit"].resetValidation();
});

// //! Закрытие попапа ЖАКА(редактирования профиля) на крестик
// buttonClose.addEventListener("click", () => {
//   closePopup(popupEdit);
// });

// //! Закрытие попапа при нажатии кнопки сохранить в попапе профиля
// buttonEditSave.addEventListener("click", () => {
//   closePopup(popupEdit);
// });

// //! Открытие формы добавления карточек
// profileButton.addEventListener("click", () => {
//   openPopup(popupForm);
//   formValidators["new-place"].resetValidation();
// });

// //! Закрытие попапа новой карточки на крестик
// buttonCloseForm.addEventListener("click", () => {
//   closePopup(popupForm);
// });

// //! Закрытие попапа картинки на крестик
// popupImageClose.addEventListener("click", () => {
//   closePopup(popupImage);
// });

// //* Закрытие по клику мышки 
// //! Закрытие попапа Жака(редактирования профиля) по клику мышкой куда угодно
// popupEdit.addEventListener('click', (e) => {
//   if (e.target === popupEdit) {
//     closePopup(popupEdit);
//   }
// });

// //! Закрытие попапа создания картинки по клику мышкой куда угодно
// popupForm.addEventListener('click', (e) => {
//   if (e.target === popupForm) {
//     closePopup(popupForm);
//   }
// });

// //! Закрытие попапа картинки по клику мышкой куда угодно
// popupImage.addEventListener('click', (e) => {
//   if (e.target === popupImage) {
//     closePopup(popupImage);
//     console.log(e.target);
//   }
// });

// //* Закрытие по екс
// //! Функиця закрытия через екс
// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);

//   }
// }

//! Функция создания карточек

function createCard(data) {
  const card = new Card(data, '#form-elements');
  const cardElement = card.generateCard();
  return cardElement;
}

const getCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    getCard.addItem(card);
  }
  }, itemListWrapper);
  getCard.renderItem();


  const cardPopup = new PopupWithImage(popupImage, popupImageContainer,popupTitle);
  cardPopup.setEventListeners();

const userInfo = new UserUnfo(divElementTitle, divElementSubtitle);


const popupProfile = new PopupWithForm(
    popupEdit,
    validationConfig,
    {callbackSubmit: (ProfileinputValue) => {
      popupProfile.addItem(ProfileinputValue);
    }
  }
);
popupProfile.setEventListeners();

  // ! попуп форм

  const popupAddCard = new PopupWithForm(
    popupForm,
    validationConfig,
    {callbackSubmit: (obj) => {
      getCard.addItem(createCard(obj));
    }
  }
);
popupAddCard.setEventListeners();



formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardRender = createCard({
    name: theNameInput.value,
    link: linkInput.value,
  });
  itemListWrapper.prepend(cardRender);
  closePopup(popupForm);
  theNameInput.value = "";
  linkInput.value = "";
  popupButtonSaveForm.setAttribute('disabled', true);
});



//! Включение валидации
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement)
//! получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   //! вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', this.close()); 
}

//? Функция закрытия попапа + еще удаляем обработчик на еск
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
}




