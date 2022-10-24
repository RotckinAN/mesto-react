import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const inputRef = React.useRef();

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar({
            avatar: inputRef.current.value
        });
        inputRef.current.value = "";
    }

    return (
        <PopupWithForm name='avatarUpdate' title='Обновить аватар' additionalClassName='popup__content-title_type_avatarCreate' value='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}> {/* попап обновления аватара */}
            <label htmlFor="inputPictureAvatar">
                <input ref={inputRef} type="url" className="popup__item popup__item_input_avatarPicture" name="avatar" autoComplete="off"
                       id="inputPictureAvatar" defaultValue="" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error inputPictureAvatar-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup