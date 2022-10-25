function PopupWithForm({name, isOpen, onClose, onSubmit, additionalClassName, title, buttonText, children}) {
    return (
        <div>
            {/* попап редактирования профиля */}
            <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <button className="popup__close" type="button" onClick={onClose}></button>
                    <form onSubmit={onSubmit} name={`${name}Form`} className={`popup__content popup__content_type_${name}`}>
                        <h2 className={`popup__content-title ${additionalClassName}`}>{title}</h2>
                        {children}
                        <button type="submit" value={buttonText} className="popup__save-button"
                                id="save-button">{buttonText}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PopupWithForm