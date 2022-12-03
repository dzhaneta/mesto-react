function ImagePopup(props) {

    return (
        <div className={`popup popup_type_view-photo ${ props.card? 'popup_opened' : ''} ${ props.onClose? '' : 'popup_opened'} `}>
            <div className="popup__photo-container">
                <button onClick={props.onClose} className="popup__close-button hover-opacity" type="button"></button>
                <figure className="popup__photo">
                    <img className="popup__photo-pic" src={props.card.link} alt=" "/>
                    <figcaption className="popup__photo-caption">{props.card.name}</figcaption>
                </figure>
            </div>
        </div>
    );
  }
  
  export default ImagePopup;