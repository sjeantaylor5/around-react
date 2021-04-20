import closeButton from '../images/Close-button.svg';
import Popup from './Popup';

function PopupWithForm(props) {
    return(
        <Popup isOpen={props.isOpen}>
            <form className="popup__container" name="profileForm">
                <button onClick={props.onClose} className="popup__close-btn" type="button"><img className="popup__close-img" src={closeButton} alt="Close Button"/></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button onSubmit={props.onSubmit} type="submit" className="popup__submit">{props.submitName}</button>
            </form>
        </Popup>
    );
}

export default PopupWithForm;