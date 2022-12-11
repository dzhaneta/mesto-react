import React, { useRef } from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose }) {

    const avatarPic = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        // onUpdateAvatar({
        //   avatar: avatarPic.current,
        // });
    }

    return (
        <PopupWithForm 
          isOpen={isOpen} 
          onClose={onClose} 
          onSubmit={handleSubmit}
          name="edit-avatar" 
          title="Обновить аватар"
          button="Сохранить"
        >
          <fieldset className="form__input-container">
            <label className="form__field">
              <input 
                ref={avatarPic}
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
        </PopupWithForm>
    );
  }
  
  export default EditAvatarPopup;