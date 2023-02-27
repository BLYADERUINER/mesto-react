function Card({ cardName, cardLink }) {
  return (
      <article className="element">
        <div className="element__image" style={{ backgroundImage: `url(${cardLink})` }}></div>
        <button className="button element__button-bin" type="button"></button>
        <div className="element__container">
          <h2 className="element__title">{cardName}</h2>
          <div className="element__like">
            <button className="button element__button" type="button"></button>
            <span className="element__counter">0</span>
          </div>
        </div>
      </article>
  );
}

export default Card;