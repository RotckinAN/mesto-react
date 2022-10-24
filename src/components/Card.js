import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
    const userContext = React.useContext(CurrentUserContext);
    const isOwn = userContext._id === props.card.owner._id;
    const isLiked = props.card.likes.some(i => i._id === userContext._id);
    const cardDeleteButtonClassName = (`element__trash ${isOwn ? '' : 'element__trash_type_hidden'}`);
    const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_active' : ''}`)

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <li className="elements__item element">
            <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
                <button className={cardDeleteButtonClassName} type="button" aria-label="trash" onClick={handleDeleteClick}></button>
                <div className="element__container">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__likeContainer">
                        <button className={cardLikeButtonClassName} type="button" aria-label="like" onClick={handleLikeClick}></button>
                        <p className="element__likeNumbers">{props.card.likes.length}</p>
                    </div>
                </div>
        </li>
    )
}

export default Card