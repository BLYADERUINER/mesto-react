import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import { api } from '../utils/api.js';
import ImagePopup from './ImagePopup.jsx';
import { CurrentUserContext } from '../context/CurrentUserContext.jsx';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
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
    setSelectedCard(null);
  }

  const [cards, setCards] = React.useState([]);
  

  React.useEffect(() => {
    api.getAllNeededData()
    .then(([user, cards]) => {
      setCards(cards);
    })
    .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    api.getUserInfo()
    .then((name) => setCurrentUser(name))
    .catch((error) => console.log(error));
  }, []);



  return (
    <CurrentUserContext.Provider value={currentUser} >
      <Header />
      <Main
        userName={currentUser.name}
        userDescription={currentUser.about}
        userAvatar={currentUser.avatar}
        cardsData={cards}
        onCardClick={setSelectedCard}
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
          defaultValue="Жак-Ив Кусто"
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
          defaultValue="Исследователь океана"
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
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
