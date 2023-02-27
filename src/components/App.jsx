import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  // открытие попов используя Хук состояния
  function handleEditProfileOnClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardPopupOnClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarPopupOnClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }


  return (
    <>
      <Header />
      <Main
        handleEditAvatarCLick={handleEditAvatarPopupOnClick}
        handleEditProfileClick={handleEditProfileOnClick}
        handleAddPlaceClick={handleAddCardPopupOnClick}
      />
      <Footer />
        {/* Popup edit profile */}
      <PopupWithForm 
       popupName="edit-profile" 
       popupTitle="Редактировать профиль" 
       popupTextButton="Сохранить" 
       isOpen={isEditProfilePopupOpen}
       onClose={closeAllPopups}
      >
        <input
          className="pop-up__input pop-up__input_edit-userName"
          name="userName"
          id="input-userName"
          placeholder="Иван Иванов"
          type="text"
          minLength="2"
          maxLength="40"
          value="Жак-Ив Кусто"
          required
        />
        <span className="pop-up__error" id="input-userName-error"></span>
        <input
          className="pop-up__input pop-up__input_edit-userAbout"
          name="userAbout"
          id="input-userAbout"
          placeholder="Расхититель гробниц"
          type="text"
          minLength="2"
          maxLength="400"
          value="Исследователь океана"
          required
        />
        <span className="pop-up__error" id="input-userAbout-error"></span>
      </PopupWithForm>
        {/* Popup Add card */}
      <PopupWithForm 
       popupName="add-card" 
       popupTitle="Новое место" 
       popupTextButton="Создать"  
       isOpen={isAddPlacePopupOpen}
       onClose={closeAllPopups}
      >
        <input
          className="pop-up__input pop-up__input_card-name"
          name="cardName"
          id="input-cardName"
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="pop-up__error" id="input-cardName-error"></span>
        <input
          className="pop-up__input pop-up__input_card-link"
          name="cardLink"
          id="input-cardLink"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="pop-up__error" id="input-cardLink-error"></span>
      </PopupWithForm>
        {/* Popup edit avatar */}
      <PopupWithForm 
       popupName="edit-avatar" 
       popupTitle="Обновить аватар" 
       popupTextButton="Сохранить" 
       isOpen={isEditAvatarPopupOpen}
       onClose={closeAllPopups}
       >
        <input
          className="pop-up__input pop-up__input_avatar-link"
          name="avatarLink"
          id="input-avatarLink"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="pop-up__error" id="input-avatarLink-error"></span>
      </PopupWithForm>
        {/* Popup delete card  */}
      <PopupWithForm popupName="delete-card" popupTitle="Вы уверены ?" popupTextButton="Да" />


      <template id="card">
        <article className="element">
          <img className="element__image" alt="" />
          <button className="button element__button-bin" type="button"></button>
          <div className="element__container">
            <h2 className="element__title"></h2>
            <div className="element__like">
              <button className="button element__button" type="button"></button>
              <span className="element__counter">0</span>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
