import editButton from '../images/edit-button.svg';
import addButton from '../images/add-button.svg';
import avatar from '../images/avatar.jpeg';

function Main({ handleAddPlaceClick, handleEditAvatarClick, handleEditProfileClick }) {
    return(
        <main className="content">
            <section className="profile">
                <button onClick={handleEditAvatarClick} className="profile__avatar-btn" type="button">
                   <img className="profile__avatar" src={avatar} alt="Cousteau Picture"/>
                   <img className="profile__avatar-img" src={editButton} alt="Edit Button"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__title">Cousteau</h1>
                    <button onClick={handleEditProfileClick} className="profile__edit-btn" type="button">
                        <img className="profile__edit-img" src={editButton} alt="Edit Button"/>
                    </button>
                    <p className="profile__explorer">Explorer</p>
                </div>
                <button onClick={handleAddPlaceClick} className="profile__add-btn" type="button">
                    <img className="profile__add-img" src={addButton} alt="Plus sign"/>
                </button>
            </section>
            <section className="pictures">
                <ul className="pictures__list">
                </ul>
            </section>
        </main>
    );
}

export default Main;