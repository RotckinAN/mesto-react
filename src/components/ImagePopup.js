{/* фото в полный размер */}

function ImagePopup(props) {
    return (
        <div className={`popup popup_type_photo-FullSize ${props.card.state ? 'popup_opened' : ''}`}>
            <div className="popup__photo-fullSize-container">
                <button className="popup__close" type="button" onClick={props.onClose}></button>
                <img src={props.card.src} alt={props.card.alt} className="popup__photoElement"/>
                <h3 className="popup__title">{props.card.alt}</h3>
            </div>
        </div>
    )
}

export default ImagePopup