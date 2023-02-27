function PopupWithForm({ popupName, popupTitle, popupTextButton, children, isOpen, onClose }) {
  return (
    <div className={`pop-up pop-up_${popupName} ${isOpen ? 'pop-up_opened' : ''}`}>
      <div className="pop-up__container">
        <button className="button pop-up__button-close" type="button" onClick={onClose}></button>
        <h2 className="pop-up__title">{`${popupTitle}`}</h2>
        <form className="pop-up__form" name={`${popupName}`} method="post">
          {children}
          <button className="button pop-up__button-save" type="submit">
            {popupTextButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
