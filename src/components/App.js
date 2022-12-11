import React, { useEffect, useState } from "react";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
        .then((profile) => {
          setCurrentUser(profile);
        })
        .catch((err) => {console.log(err);});
}, []);

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

  function handleUpdateUser(data) {
    api.setUserInfo(data.name, data.about)
    .then((res) => {
      console.log(currentUser);
      console.log(res);
      setCurrentUser({
        ...currentUser,
        name: res.name,
        about: res.about
      });
      closeAllPopups();
    })
    .catch((err) => console.log(err))
  };  


  




  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        <Header />

        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
        />

        <Footer />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
        />   

        <PopupWithForm 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          name="add-card" 
          title="Новое место"
          button="Создать"
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
        </PopupWithForm>

        <PopupWithForm 
          onClose={closeAllPopups} 
          name="delete-card" 
          title="Вы уверены?"
          button="Да"
        />

        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups} 
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
