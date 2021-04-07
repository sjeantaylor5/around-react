import closeButton from '../images/Close-button.svg';

function PopupWithForm(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__overlay popup__overlay_type_${props.name}`}></div>
            <form action="#" method="POST" className="popup__container" name="profileForm">
                <button onClick={props.onClose} className="popup__close-btn" type="button"><img className="popup__close-img" src={closeButton} alt="Close Button"/></button>
                <h3 className="popup__title">{props.title}</h3>
                <input id={props.idName} className="popup__input" type="text" placeholder={props.placeholderName} name="name" required maxlength={props.maxlengthName} minlength={props.minlengthName}/>
                <span id={`${props.idName}-error`} className="popup__error"></span>

                <input id={props.idSubtitle} className="popup__input" type="text" placeholder={props.placeholderSubtitle} name="description" required maxlength={props.maxlengthSubtitle} minlength={props.minlengthSubtitle}/>
                <span id={`${props.idSubtitle}-error`} className="popup__error"></span>

                <button type="submit" className="popup__submit">{props.submitName}</button>
            </form>
        </div>
    );
}

export default PopupWithForm;