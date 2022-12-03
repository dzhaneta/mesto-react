function Card(props) {

    return (
     <li className="card" id={props.card._id}>
        <div className="photo-grid__item">
            <button className="photo-grid__delete-button hover-opacity" type="button" aria-label="Удалить"></button>
            <img className="photo-grid__pic" src={props.card.link} alt={props.card.name}/>
            <div className="photo-grid__pic-info">
                <h2 className="photo-grid__pic-title">{props.card.name}</h2>
                <div className="photo-grid__like-container">
                    <button className="photo-grid__like-button" type="button" aria-label="Нравится"></button>
                    <p className="photo-grid__pic-likes">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    </li>
);
  }
  
  export default Card;