function Card({ card, onClick, userID }) {

    return (
        <li 
            className="card" 
            id={card._id}
            onClick={() => onClick(card)}
        >
            <div className="photo-grid__item">
                {userID === card.owner._id && (
                    <button 
                        className="photo-grid__delete-button hover-opacity" 
                        type="button" 
                        aria-label="Удалить"
                    />
                )}
                
                <img className="photo-grid__pic" src={card.link} alt={card.name}/>
                <div className="photo-grid__pic-info">
                    <h2 className="photo-grid__pic-title">{card.name}</h2>
                    <div className="photo-grid__like-container">
                        <button className="photo-grid__like-button" type="button" aria-label="Нравится"></button>
                        <p className="photo-grid__pic-likes">{card.likes.length}</p>
                    </div>
                </div>
            </div>
        </li>
    );
}
  
  export default Card;