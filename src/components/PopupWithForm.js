function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${ props.isOpen? 'popup_opened' : ''} ${ props.onClose? '' : 'popup_opened'}`}  >
            <div className="popup__container">
            <button onClick={props.onClose} className="popup__close-button hover-opacity" type="button"></button>
            <form className={`form form_type_${props.name}`} name={`${props.name}-form`} noValidate>
                <h2 className="form__title">{props.title}</h2>
                {props.children}
            </form>
            </div>
        </div>
    );
  }
  
  export default PopupWithForm;