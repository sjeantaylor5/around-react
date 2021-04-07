import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="page">
        <header className="header">
            <img className="header__vector" src="../images/image.svg" alt="Around the United States"/>
        </header>
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-btn" type="button">
                   <img className="profile__avatar" src="../images/avatar.jpeg" alt="Cousteau Picture"/>
                   <img className="profile__avatar-img" src="../images/edit-button.svg" alt="Edit Button"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__title"></h1>
                    <button className="profile__edit-btn" type="button">
                        <img className="profile__edit-img" src="../images/edit-button.svg" alt="Edit Button"/>
                    </button>
                    <p className="profile__explorer"></p>
                </div>
                <button className="profile__add-btn" type="button">
                    <img className="profile__add-img" src="../images/add-button.svg" alt="Plus sign"/>
                </button>
            </section>
            <section className="pictures">
                <ul className="pictures__list">
                </ul>
            </section>
        </main>
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Around The U.S.</p>
        </footer>
        <div className="popup popup_type_profile">
            <div className="popup__overlay popup__overlay_type_profile"></div>
            <form action="#" method="POST" className="popup__container" name="profileForm">
                <button className="popup__close-btn" type="button"><img className="popup__close-img" src="../images/Close-button.svg" alt="Close Button"/></button>
                <h3 className="popup__title">Edit profile</h3>
                <input id="profile-name" className="popup__input" type="text" placeholder="Name" name="name" required maxlength="40" minlength="2"/>
                <span id="profile-name-error" className="popup__error"></span>

                <input id="profile-text" className="popup__input" type="text" placeholder="About me" name="description" required maxlength="200" minlength="2"/>
                <span id="profile-text-error" className="popup__error"></span>

                <button type="submit" className="popup__submit">Save</button>
            </form>
        </div>
        <div className="popup popup_type_avatar">
            <div className="popup__overlay popup__overlay_type_avatar"></div>
            <form action="#" method="POST" className="popup__container popup__container_type_avatar" name="profileAvatar">
                <button className="popup__close-btn" type="button"><img className="popup__close-img" src="../images/Close-button.svg" alt="Close Button"/></button>
                <h3 className="popup__title">Change profile picture</h3>

                <input id="avatar-url" className="popup__input popup__input_type_avatar" type="url" placeholder="Image link" name="link" required/>
                <span id="avatar-url-error" className="popup__error"></span>

                <button type="submit" className="popup__submit">Save</button>
            </form>
        </div>
        <div className="popup popup_type_addpic">
            <div className="popup__overlay popup__overlay_type_addpic"></div>
            <form action="#" method="POST" className="popup__container popup__container_type_addpic" name="addForm">
                <button className="popup__close-btn popup__close-btn_type_addpic" type="button"><img className="popup__close-img popup__close-img_type_addpic" src="../images/Close-button.svg" alt="Close Button"/></button>
                <h3 className="popup__title popup__title_type_addpic">New place</h3>
                <input id="pic-title" className="popup__input popup__input_type_addpic" type="text" placeholder="Title" name="name" required maxlength="30" minlength="1"/>
                <span id="pic-title-error" className="popup__error"></span>

                <input id="pic-url" className="popup__input popup__input_type_addpic" type="url" placeholder="Image link" name="link" required/>
                <span id="pic-url-error" className="popup__error"></span>

                <button type="submit" className="popup__submit popup__submit_type_addpic popup__submit_disabled">Create</button>
            </form>
        </div>
        <div className="popup popup_type_image">
            <div className="popup__overlay popup__overlay_type_image"></div>
            <div className="popup__container popup__container_type_image">
                <figure className="popup__figure">
                    <button className="popup__close-btn popup__close-btn_type_image" type="button"><img className="popup__close-img popup__close-img_type_image" src="../images/Close-button.svg" alt="Close Button"/></button>
                    <img className="popup__image" src="//:0" alt="#"/>
                    <figcaption className="popup__image-title"></figcaption>
                </figure>
            </div>
        </div>
        <div className="popup popup_type_delete">
            <div className="popup__overlay popup__overlay_type_delete"></div>
            <form action="#" method="POST" className="popup__container popup__container_type_delete" name="deleteCard">
                <button className="popup__close-btn" type="button"><img className="popup__close-img" src="../images/Close-button.svg" alt="Close Button"/></button>
                <h3 className="popup__title">Are you sure?</h3>
                <button type="button" className="popup__submit popup__submit_type_delete">Yes</button>
            </form>
        </div>
    </div>
    );
}

export default App;