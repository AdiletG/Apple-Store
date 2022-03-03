import React from 'react';
import './popup-bay.css'
import AirPods from '../../../assets/main/Airpods.png'
const Popup = ({popupBay, setPopupBay, products, setProducts}) => {

    const closePopupFormCLickOnOverlay = (e) => {
        if (e.target.className === 'popup-bay'){
            setPopupBay(false)
        }
    };



    const {bay, name, price, imageUrl } = popupBay;


    return (
        <div className="popup-bay" style={{display: bay === true ? 'flex' : 'none'}} onClick={closePopupFormCLickOnOverlay}>
            <div className="popup-bay__product" >
                <h2 className="popup-bay__title">Спасибо за вашу покупку !</h2>
                <img src={imageUrl} alt="Air Pods" className='popup-bay__img'/>
                <h3 className='popup-bay__name'>{name}</h3>
                <p className='popup-bay__price'>Цена за товар : {name === 'Apple Card' ? '' : '$'}{price}</p>
            </div>
        </div>
    );
};

export default Popup;