{/* фото в полный размер */}

function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_type_photo-FullSize ${card.state ? 'popup_opened' : ''}`}>
            <div className="popup__photo-fullSize-container">
                <button className="popup__close" type="button" onClick={onClose}></button>
                <img src={card.src} alt={card.alt} className="popup__photoElement"/>
                <h3 className="popup__title">{card.alt}</h3>
            </div>
        </div>
    )
}

export default ImagePopup