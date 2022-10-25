import PopupWithForm from "./PopupWithForm";
import React from "react";

function ConfirmationPopup() {
    return (
        <PopupWithForm name='confirmDelete' title='Вы уверены?' additionalClassName='popup__content-title_type_confirmDelete' buttonText='Да'/>
    )
}

export default ConfirmationPopup