import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";


function App() {
  return (
    <>
      <Header />
      <Main
        handleEditAvatarCLick={ () => document.querySelector('.pop-up_avatar-edit').classList.add('pop-up_opened')}
        handleEditProfileClick={ () => document.querySelector('.pop-up_profile-edit').classList.add('pop-up_opened')}
        handleAddPlaceClick={ () => document.querySelector('.pop-up_elements').classList.add('pop-up_opened')}
      />
      <Footer />
      <div className="pop-up pop-up_profile-edit">
        <div className="pop-up__container">
          <button
            className="button pop-up__button-close"
            type="button"
          ></button>
          <h2 className="pop-up__title">Редактировать профиль</h2>
          <form
            className="pop-up__form"
            id="form-edit-profile"
            name="popupFormProfile"
            method="post"
          >
            <input
              className="pop-up__input pop-up__input_name_edit"
              id="input-profilename"
              name="name"
              placeholder="Иван Иванов"
              type="text"
              minLength="2"
              maxLength="40"
              required
              value="Жак-Ив Кусто"
            />
            <span className="pop-up__error" id="input-profilename-error"></span>
            <input
              className="pop-up__input pop-up__input_status_edit"
              id="input-profilestatus"
              name="about"
              placeholder="Расхититель гробниц"
              type="text"
              minLength="2"
              maxLength="400"
              required
              value="Исследователь океана"
            />
            <span
              className="pop-up__error"
              id="input-profilestatus-error"
            ></span>
            <button className="button pop-up__button-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="pop-up pop-up_elements">
        <div className="pop-up__container">
          <button
            className="button pop-up__button-close"
            type="button"
          ></button>
          <h2 className="pop-up__title">Новое место</h2>
          <form
            className="pop-up__form"
            id="form-add-card"
            name="popupFormCard"
            method="post"
          >
            <input
              className="pop-up__input pop-up__input_name_card"
              id="input-namecard"
              name="name"
              placeholder="Название"
              type="text"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="pop-up__error" id="input-namecard-error"></span>
            <input
              className="pop-up__input pop-up__input_link_image"
              id="input-urlcard"
              name="link"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span className="pop-up__error" id="input-urlcard-error"></span>
            <button className="button pop-up__button-save" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="pop-up pop-up_card-image">
        <figure className="pop-up__figure">
          <img className="pop-up__image" />
          <figcaption className="pop-up__figcaption"></figcaption>
          <button
            className="button pop-up__button-close"
            type="button"
          ></button>
        </figure>
      </div>
      <div className="pop-up pop-up_card-delete">
        <div className="pop-up__container">
          <button
            className="button pop-up__button-close"
            type="button"
          ></button>
          <h2 className="pop-up__title">Вы уверены ?</h2>
          <button className="button pop-up__button-save" type="button">
            Да
          </button>
        </div>
      </div>
      <div className="pop-up pop-up_avatar-edit">
        <div className="pop-up__container">
          <button
            className="button pop-up__button-close"
            type="button"
          ></button>
          <h2 className="pop-up__title">Обновить аватар</h2>
          <form
            className="pop-up__form"
            id="form-edit-avatar"
            name="popupFormAvatar"
            method="post"
          >
            <input
              className="pop-up__input pop-up__input_link_avatar"
              id="input-urlAvatar"
              name="link"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span className="pop-up__error" id="input-urlAvatar-error"></span>
            <button className="button pop-up__button-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <template id="card">
        <article className="element">
          <img className="element__image" />
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
