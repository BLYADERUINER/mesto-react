// pop-up PROFILE-EDIT;
export const popupProfileEdit = document.querySelector('.pop-up_profile-edit'); // поп-пуп редактирования профиля
export const buttonSave = document.querySelector('.pop-up__button-save');


// pop-up ELEMENTS-CARD;
export const popupElementsCard = document.querySelector('.pop-up_elements'); // поп-пуп карточки


// Profile section
const profileSection = document.querySelector('.profile'); // секция профиль
export const popupOpenProfileEdit = profileSection.querySelector('.profile__button-edit'); // кнопка (open) редактирования профиля
export const popupOpenElementsCard = profileSection.querySelector('.profile__button-add'); // кнопка (open) добавления карточек
export const profileName = profileSection.querySelector('.profile__name'); // имя профиля
export const profileStatus = profileSection.querySelector('.profile__status'); // статуса профиля
export const profileAvatar = profileSection.querySelector('.profile__avatar');
export const buttonEditAvatar = profileSection.querySelector('.profile__avatar-button-edit');


// pop-up Form-Edit
export const popupEditForm = document.forms['popupFormProfile']; // форма поппуп (edit profile)
export const nameInputEdit = popupEditForm.querySelector('.pop-up__input_name_edit'); // ввод имени поп-пуп (edit profile)
export const statusInputEdit = popupEditForm.querySelector('.pop-up__input_status_edit'); // ввод статуса поп-пуп (edit profile)


// pop-up Add-Card
export const popupAddCardForm = document.forms['popupFormCard']; // форма поппуп (add card)
export const nameCardInput = popupAddCardForm.querySelector('.pop-up__input_name_card'); // ввод названия карты
export const imageLinkCardInput = popupAddCardForm.querySelector('.pop-up__input_link_image'); // ввод ссылки на картинку


// pop-up Image Card
export const popupCardImage = document.querySelector('.pop-up_card-image'); // поппуп Картинки карточки
export const popupImage = popupCardImage.querySelector('.pop-up__image'); // картинка попуп
export const popupFigcaption = popupCardImage.querySelector('.pop-up__figcaption'); // подпись к картинке


// Elements section
export const elementsSection = document.querySelector('.elements'); // секция Карточек


// pop-up delete verifivation
export const popupDeleteCard = document.querySelector('.pop-up_card-delete');


// pop-up user avatar
export const popupAvatar = document.querySelector('.pop-up_avatar-edit');
export const popupAvatarForm = document.forms['popupFormAvatar'];



// Object For Validation
export const objectForValidation = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__button-save',
  inactiveButtonClass: 'pop-up__button-save_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
};
