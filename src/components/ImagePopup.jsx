function ImagePopup() {
  return (
    <div className="pop-up pop-up_card-image">
      <figure className="pop-up__figure">
        <img className="pop-up__image" alt="" />
        <figcaption className="pop-up__figcaption"></figcaption>
        <button className="button pop-up__button-close" type="button"></button>
      </figure>
    </div>
  );
}

export default ImagePopup;