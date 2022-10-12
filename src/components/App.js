import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState ({src: '#', alt: '#', state: false});

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard({src: '#', alt: '#', state: false})
    }

    function handleCardClick(props) {
        setSelectedCard(
            {
            alt: props.name,
            src: props.link,
            state: true
        }
        )
    }

    return (
    <div className="page">
      <>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm name='editProfile' title='Редактировать профиль' value='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}> {/* попап редактирования профиля */}
            <label htmlFor="inputName">
                <input type="text" name="name" className="popup__item popup__item_input_name" autoComplete="off"
                       id="inputName" defaultValue="" placeholder="Имя" minLength="2" maxLength="40" required/>
                <span className="popup__input-error inputName-error"></span>
            </label>
            <label htmlFor="inputJob">
                <input type="text" name="about" className="popup__item popup__item_input_job" autoComplete="off"
                       id="inputJob" defaultValue="" placeholder="О себе" minLength="2" maxLength="200" required/>
                <span className="popup__input-error inputJob-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name='addPicture' title='Новое место' value='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}> {/* попап добавления новых фото */}
            <label htmlFor="inputPicturePopup">
            <input type="text" name="name" className="popup__item popup__item_input_pictureName" autoComplete="off"
                   id="inputPicturePopup" defaultValue="" placeholder='Название' minLength="2" maxLength="30" required/>
            <span className="popup__input-error inputPicturePopup-error"></span>
        </label>
            <label htmlFor="inputPictureLink">
                <input type="url" name="link" className="popup__item popup__item_input_picture" autoComplete="off"
                       id="inputPictureLink" defaultValue="" placeholder='Ссылка на картинку' required/>
                <span className="popup__input-error inputPictureLink-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name='avatarUpdate' title='Обновить аватар' additionalClassName='popup__content-title_type_avatarCreate' value='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}> {/* попап обновления аватара */}
            <label htmlFor="inputPictureAvatar">
                <input type="url" className="popup__item popup__item_input_avatarPicture" name="avatar" autoComplete="off"
                       id="inputPictureAvatar" defaultValue="" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error inputPictureAvatar-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm name='confirmDelete' title='Вы уверены?' additionalClassName='popup__content-title_type_confirmDelete' value='Да'/> {/* попап подтверждения удаления карточки */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </>
    </div>
  );
}

export default App;