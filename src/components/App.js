import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
    return (
        <div className="page">
          <Header />
          <Main />
          <Footer />
        
        {/* <div className="popup popup_type_profile">
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
        </div> */}
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
        {/* <div className="popup popup_type_addpic">
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
        </div> */}
        <div className="popup popup_type_delete">
            <div className="popup__overlay popup__overlay_type_delete"></div>
            <form action="#" method="POST" className="popup__container popup__container_type_delete" name="deleteCard">
                <button className="popup__close-btn" type="button"><img className="popup__close-img" src="../images/Close-button.svg" alt="Close Button"/></button>
                <h3 className="popup__title">Are you sure?</h3>
                <button type="button" className="popup__submit popup__submit_type_delete">Yes</button>
            </form>
        </div>

        <PopupWithForm title='Change profile picture' name='avatar' />
        <PopupWithForm
         title='Edit profile'
         name='profile'
         idName='profile-name'
         idSubtitle='profile-text'
         placeholderName='Name'
         placeholderSubtitle='About me'
         submitName='Save'
        />
        <PopupWithForm
         title='New Place'
         name='addPic'
         idName='pic-title'
         idSubtitle='pic-url'
         placeholderName='Title'
         placeholderSubtitle='Image link'
         submitName='Create'
        />
        <ImagePopup />

    </div>
    );
}

export default App;