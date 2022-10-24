import PopupWithForm from "./PopupWithForm";
import React from "react";

function ConfirmationPopup({name, title, value, additionalClassName}) {
    return (
        <PopupWithForm name={name} title={title} additionalClassName={additionalClassName} value={value}/>
    )
}

export default ConfirmationPopup