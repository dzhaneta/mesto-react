import React, { useEffect, useState } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import api from '../utils/api';
import Card from "./Card";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);


    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => {console.log(err);});
    }, []);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {console.log(err);});
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => {console.log(err);});
    }

    return (
        <main className="content">

            <section className="profile">
            <div onClick={props.onEditAvatar} className="profile__avatar-container">
                <img className="profile__avatar" src={currentUser.avatar} alt="фото профиля"/>
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{currentUser.name}</h1>
                <p className="profile__bio">{currentUser.about}</p>
                <button onClick={props.onEditProfile} className="profile__edit-button hover-opacity" type="button"></button>
            </div>
            <button onClick={props.onAddPlace} className="profile__add-button hover-opacity" type="button"></button>

            </section>

            <section className="gallery">
                <ul className="photo-grid">
                    
                    {cards.map((item, i) => (
                        <Card 
                            userID={currentUser._id}
                            onClick={props.onCardClick} 
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                            card={item} 
                            key={item._id} 
                        />
                    ))}

                </ul>
            </section>

        </main>

    );
}
  
  export default Main;
  