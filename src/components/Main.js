import {api} from "../utils/Api";
import React from "react";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfoByRequest().then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar)
        })
            .catch((err) => {
            console.error(err)
        });

        api.getInitialCards().then((res) => {
            setCards(res.map((card) => ({
                    id: card._id,
                    link: card.link,
                    name: card.name,
                    likes: card.likes.length
                })
            ))
        })
            .catch((err) => {
            console.error(err)
        });
    }, [])

    return (
        <main className="content page__content">
            <section className="profile" aria-label="Секция с профилем">
                <div className="profile__overlay" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Фотография на аватар"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="edit" onClick={props.onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="add" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements" aria-label="Секция с картинками">
                <ul className="elements__list">
                    {
                        cards.map((card) => <Card key={card.id} link={card.link} name={card.name} likes={card.likes} onCardClick={props.onCardClick}/>)
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main