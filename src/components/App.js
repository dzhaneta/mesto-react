import React, { useEffect, useState } from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };  

  function handleCardClick(card) {
    setSelectedCard(card);
  };  

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">

      <Header />

      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        name="edit-profile" 
        title="Редактировать профиль"
      >
        <fieldset className="form__input-container">
          <label className="form__field">
            <input 
              id="username" 
              className="form__input form__input_type_username" 
              type="text" 
              name="name" 
              placeholder="Имя" 
              minLength="2" 
              maxLength="40" 
              required
            />
            <span className="form__input-error username-error"/>
         </label>
         <label className="form__field">
            <input 
              id="userabout" 
              className="form__input form__input_type_userabout" 
              type="text" 
              name="about" 
              placeholder="О себе" 
              minLength="2" 
              maxLength="200" 
              required
            />
            <span className="form__input-error userabout-error"/>
          </label>
        </fieldset>
        <button className="form__save-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        name="edit-avatar" 
        title="Обновить аватар"
      >
        <fieldset className="form__input-container">
          <label className="form__field">
            <input 
              id="avatarlink" 
              className="form__input form__input_type_avatarlink" 
              type="url" 
              name="avatar" 
              placeholder="Ссылка на картинку" 
              required
            />
            <span className="form__input-error avatarlink-error"/>
          </label>
        </fieldset>
        <button className="form__save-button" type="submit">Сохранить</button>
      </PopupWithForm>
        
      <PopupWithForm 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
        name="add-card" 
        title="Новое место"
      >
        <fieldset className="form__input-container">
          <label className="form__field">
            <input 
              id="cardtitle" 
              className="form__input form__input_type_cardtitle" 
              type="text" 
              name="card-title" 
              placeholder="Название" 
              minLength="2" 
              maxLength="30" 
              required
            />
            <span className="form__input-error cardtitle-error"/>
          </label>
          <label className="form__field">
            <input 
              id="cardlink" 
              className="form__input form__input_type_cardlink" 
              type="url" 
              name="card-link" 
              placeholder="Ссылка на картинку" 
              required
            />
            <span className="form__input-error cardlink-error"/>           
          </label>
        </fieldset>
        <button className="form__save-button" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm 
        onClose={closeAllPopups} 
        name="delete-card" 
        title="Вы уверены?"
      >
        <button className="form__save-button" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
      />

    </div>
  );
}

export default App;
