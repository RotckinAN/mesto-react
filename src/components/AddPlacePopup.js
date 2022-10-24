import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlaceSubmit}) {
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('')

    function handleTitleChange(evt) {
        setTitle(evt.target.value)
    }

    function handleLinkChange(evt) {
        setLink(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlaceSubmit({
            name: title,
            link: link
        })
    }

    return(
        <PopupWithForm name='addPicture' title='Новое место' value='Создать' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}> {/* попап добавления новых фото */}
            <label htmlFor="inputPicturePopup">
                <input onChange={handleTitleChange} type="text" name="name" className="popup__item popup__item_input_pictureName" autoComplete="off"
                       id="inputPicturePopup" value={title} placeholder='Название' minLength="2" maxLength="30" required/>
                <span className="popup__input-error inputPicturePopup-error"></span>
            </label>
            <label htmlFor="inputPictureLink">
                <input onChange={handleLinkChange} type="url" name="link" className="popup__item popup__item_input_picture" autoComplete="off"
                       id="inputPictureLink" value={link} placeholder='Ссылка на картинку' required/>
                <span className="popup__input-error inputPictureLink-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup