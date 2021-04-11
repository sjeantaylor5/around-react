import closeButton from '../images/Close-button.svg';
import Popup from './Popup';

function ImagePopup({ isOpen, onClose, card }) {
    return(
        <Popup isOpen={isOpen}>
            <div className="popup__container popup__container_type_image">
                <figure className="popup__figure">
                    <button onClick={onClose} className="popup__close-btn popup__close-btn_type_image" type="button"><img className="popup__close-img popup__close-img_type_image" src={closeButton} alt="Close Button"/></button>
                    <img className="popup__image" src={card.link} alt={card.name}/>
                    <figcaption className="popup__image-title">{card.name}</figcaption>
                </figure>
            </div>
        </Popup>
    );
}

export default ImagePopup;