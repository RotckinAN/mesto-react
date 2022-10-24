import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    const buttonText = isLoading ? 'Сохранение...' : 'Сохранить';

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about)
    }, [currentUser, isOpen])

    function handleNameChange(evt) {
        setName(evt.target.value)
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({name: name,
            about: description})
    }

    return (
        <PopupWithForm name='editProfile' title='Редактировать профиль' value={buttonText} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}> {/* попап редактирования профиля */}
            <label htmlFor="inputName">
                <input onChange={handleNameChange} value={name || ''} type="text" name="name" className="popup__item popup__item_input_name" autoComplete="off"
                       id="inputName" placeholder="Имя" minLength="2" maxLength="40" required/>
                <span className="popup__input-error inputName-error"></span>
            </label>
            <label htmlFor="inputJob">
                <input onChange={handleDescriptionChange} value={description || ''} type="text" name="about" className="popup__item popup__item_input_job" autoComplete="off"
                       id="inputJob" placeholder="О себе" minLength="2" maxLength="200" required/>
                <span className="popup__input-error inputJob-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup