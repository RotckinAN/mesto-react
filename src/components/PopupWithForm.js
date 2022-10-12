function PopupWithForm(props) {
    return (
        <div>
            {/* попап редактирования профиля */}
            <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <button className="popup__close" type="button" onClick={props.onClose}></button>
                    <form action="src/components/App#" name={`${props.name}Form`} className={`popup__content popup__content_type_${props.name}`}
                          noValidate>
                        <h2 className={`popup__content-title ${props.additionalClassName}`}>{props.title}</h2>
                        {props.children}
                        <button type="submit" value={props.value} className="popup__save-button"
                                id="save-button" disabled>{props.value}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PopupWithForm