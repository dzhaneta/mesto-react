import React, { useEffect, useState } from "react";
import api from '../utils/api';
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getProfile()
        .then((profile) => {
            setUserName(profile['name']);
            setUserDescription(profile['about']);
            setUserAvatar(profile['avatar']);
        })
        .catch((err) => {console.log(err);});
    }, []);


    useEffect(() => {
        api.getCards()
        .then((cardsData) => {
           setCards(cardsData);
        })
        .catch((err) => {console.log(err);});
    }, []);


    return (
        <main className="content">

            <section className="profile">
            <div onClick={props.onEditAvatar} className="profile__avatar-container">
                <img className="profile__avatar" src={userAvatar} alt="фото профиля"/>
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__bio">{userDescription}</p>
                <button onClick={props.onEditProfile} className="profile__edit-button hover-opacity" type="button"></button>
            </div>
            <button onClick={props.onAddPlace} className="profile__add-button hover-opacity" type="button"></button>

            </section>

            <section className="gallery">
                <ul className="photo-grid">
                    
                    {cards.map((item, i) => (
                        <Card onClick={props.onCardClick} card={item} key={i} />
                    ))}

                </ul>
            </section>

        </main>

    );
  }
  
  export default Main;
  