import PopupWithForm from "./PopupWithForm";
import React from "react";
import {useForm} from "../hooks/useForm";

const initialValues = {
    name: '',
    link: '',
}

function AddPlacePopup({isOpen, onClose, onAddPlaceSubmit, isLoading}) {
    const {values, handleChange, setValues} = useForm(initialValues);
    const buttonText = isLoading ? 'Создание...' : 'Создать';

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlaceSubmit({
            name: values.name,
            link: values.link
        });
    }

    React.useEffect(() => {
        setValues(initialValues)
    }, [isOpen])

    return(
        <PopupWithForm name='addPicture' title='Новое место' buttonText={buttonText} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}> {/* попап добавления новых фото */}
            <label htmlFor="inputPicturePopup">
                <input onChange={handleChange} type="text" name="name" className="popup__item popup__item_input_pictureName" autoComplete="off"
                       id="inputPicturePopup" value={values.name} placeholder='Название' minLength="2" maxLength="30" required/>
                <span className="popup__input-error inputPicturePopup-error"></span>
            </label>
            <label htmlFor="inputPictureLink">
                <input onChange={handleChange} type="url" name="link" className="popup__item popup__item_input_picture" autoComplete="off"
                       id="inputPictureLink" value={values.link} placeholder='Ссылка на картинку' required/>
                <span className="popup__input-error inputPictureLink-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup