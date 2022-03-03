import React,{useState} from 'react';
import './main.css';
import AppleTv from '../../assets/main/Appletv.png';
import Iphone from '../../assets/main/Iphone.png';
import AirPods from '../../assets/main/Airpods.png'
import AppleCard from '../../assets/main/Applecard.png'
import AppleWatch from '../../assets/main/AppleWatch.jpg'
import IMac from '../../assets/main/IMac.jpg'
import MacBook from '../../assets/main/MacBook.jpg'
import IPad from '../../assets/main/IPad.jpg'
import Card from "./Card";
import Popup from "./Popup/Popup";
import PopupBay from "./Popup-bay/Popup-bay";

const Main = () => {

    const [products, setProducts] = useState([
        {
        id:1,
        title:'AirPods',
        price: 199.00,
        img: AirPods,
    }  , {
        id:2,
        title:'Iphone XR',
        price: 799.00,
        img: Iphone,
    }, {
        id:3,
        title:'Apple TV 4K',
        price: 179.00,
        img: AppleTv,
    }, {
        id:4,
        title:'Apple Card',
        price: 'Free',
        img: AppleCard,
    },{
        id:5,
        title:'Apple Watch',
        price: 599.00,
        img: AppleWatch,
    }  , {
        id:6,
        title:'I Mac',
        price: 1799.00,
        img: IMac,
    }, {
        id:7,
        title:'Mac Book',
        price: 1379.00,
        img: MacBook,
    }, {
        id:8,
        title:'I Pad',
        price: 1099.00,
        img: IPad,
    }
    ]);

    const [all ,setAll] = useState('');

    const [popupOpen, setPopupOpen] = useState(false);

    const [popupBay, setPopupBay] = useState({
        name:'',
        imageUrl:'',
        price:null,
        bay:false
    });


    return (
        <main className='main'>

            <div className="container">
            <section className="main__content">
                    <div className="main__text">
                        <h2 className="main__title">Check also</h2>
                        <p className="main__subtitle" onClick={()=> setAll('all')}>See all ></p>
                    </div>
                <button type='button' className='main__add-card-btn' onClick={()=> setPopupOpen(true)} >Add Card</button>

                <div className="main__row">
                    {products.filter((item,idx) => {
                        if (all.length === 0){
                            return idx < 4
                        }else{
                            return item
                        }
                    }).map((product) =>(
                        <Card setProducts={setProducts} products={products} key={product.id} product={product}  setPopupBay={setPopupBay} />
                    ))}

                </div>

                {
                    all.length !== 0 ? <p className='main__card-hide' onClick={() => setAll('')}>  Hide </p> : ''
                }
            </section>
                 </div>

            <Popup products={products} setProducts={setProducts} popupOpen={popupOpen} setPopupOpen={setPopupOpen}/>

            <PopupBay products={products} setProducts={setProducts} popupBay={popupBay} setPopupBay={setPopupBay}/>
        </main>
    );
};

export default Main;