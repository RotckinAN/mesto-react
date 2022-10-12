function Card(props) {
    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <li className="elements__item element">
            <img className="element__photo" src={props.link} alt={props.name} onClick={handleClick}/>
                <button className="element__trash" type="button" aria-label="trash"></button>
                <div className="element__container">
                    <h2 className="element__title">{props.name}</h2>
                    <div className="element__likeContainer">
                        <button className="element__like" type="button" aria-label="like"></button>
                        <p className="element__likeNumbers">{props.likes}</p>
                    </div>
                </div>
        </li>
    )
}

export default Card