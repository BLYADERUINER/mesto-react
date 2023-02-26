function Main({
  handleEditAvatarCLick,
  handleEditProfileClick,
  handleAddPlaceClick,
}) {
  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__container-avatar">
          <img
            className="profile__avatar"
            src="<%=require('./images/profile__avatar/avatar.jpg')%>"
            alt="Аватрка"
          />
          <button
            className="profile__avatar-button-edit"
            onClick={handleEditAvatarCLick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="button profile__button-edit"
              type="button"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__status">Исследователь океана</p>
        </div>
        <button
          className="button profile__button-add"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements content__elements"></section>
    </main>
  );
}

export default Main;
