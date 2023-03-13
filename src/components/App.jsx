import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import { api } from '../utils/api.js';
import ImagePopup from './ImagePopup.jsx';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
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



  function handleCardClick(card) {
    const isLiked  =  card.likes.some((item) => item._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
    })
    .catch((error) => console.log(error));
  }


  function handleCardDelete(cardId) {
    api.deleteUserCard(cardId)
    .then(() => {
      setCards((state) => state.filter((item) => item._id !== cardId))
    })
    .catch((error) => console.log(error));
  }


  function handleUpdateUser({name, about}) {
    api.patchProfileEdit(name, about)
    .then((response) => setCurrentUser(response))
    .then(() => closeAllPopups())
    .catch((error) => console.log(error));
  }


  function handleUpdateUserAvatar(avatarLink) {
    api.patchAvatar(avatarLink)
    .then((response) => setCurrentUser(response))
    .then(() => closeAllPopups())
    .catch((error) => console.log(error));
  }


  return (
    <CurrentUserContext.Provider value={currentUser} >
      <Header />
      <Main
        userName={currentUser.name}
        userDescription={currentUser.about}
        userAvatar={currentUser.avatar}
        cardsData={cards}
        onCardLike={handleCardClick}
        onCardClick={setSelectedCard}
        onCardDelete={handleCardDelete}
        handleEditAvatarCLick={handleEditAvatarPopupOnClick}
        handleEditProfileClick={handleEditProfileOnClick}
        handleAddPlaceClick={handleAddCardPopupOnClick}
      />
      <Footer />
        {/* Popup edit profile */}
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
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
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateUserAvatar} />
        {/* Popup delete card  */}
      <PopupWithForm popupName="delete-card" popupTitle="Вы уверены ?" popupTextButton="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
