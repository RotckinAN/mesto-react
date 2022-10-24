import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setIsSelectedCard] = React.useState ({src: '#', alt: '#', state: false});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfoByRequest()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => {
            console.error(err)
        });
    }, []);

    React.useEffect(() => {
        api.getInitialCards().
        then((res) => {
            setCards(res.map((card) => ({
                    _id: card._id,
                    link: card.link,
                    name: card.name,
                    likes: card.likes,
                    owner: card.owner,
                    createdAt: card.createdAt
                })
            ))
        })
            .catch((err) => {
                console.error(err)
            });
    }, []);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            setCards(cards.filter(actualCard => actualCard._id !== card._id))
        })
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsSelectedCard({src: '#', alt: '#', state: false})
    }

    function handleCardClick(props) {
        setIsSelectedCard({
            alt: props.name,
            src: props.link,
            state: true
        })
    }

    function handleUpdateUser(userInfo) {
        api.patchProfileInfo(userInfo)
            .then((res) => {
            setCurrentUser(res);
            closeAllPopups()
        })
            .catch((err) => {
            console.error(err)})
    }

    function handleAddPlaceSubmit(newPhoto) {
        api.postNewPhoto(newPhoto)
            .then((res) => {
                setCards([res, ...cards]);
                closeAllPopups()
            })
            .catch((err) => {
            console.error(err)})
    }

    function handleUpdateAvatar(newAvatar) {
        api.patchProfileAvatar(newAvatar)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups()
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
    <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} cards={cards} />
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <PopupWithForm name='confirmDelete' title='Вы уверены?' additionalClassName='popup__content-title_type_confirmDelete' value='Да'/> {/* попап подтверждения удаления карточки */}
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;