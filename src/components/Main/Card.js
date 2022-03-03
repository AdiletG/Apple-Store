import React from 'react';

    const Card = ({product,setProducts,products, setPopupBay}) => {


    const {title,img,price,id} = product;

    const deleteCardHandler = id => setProducts(products.filter(item => item.id !== id));

        const bayCardHandler = (title, img, price) => {
            setPopupBay({
                name:title,
                imageUrl:img,
                price:price,
                bay:true
            });

            setTimeout(()=>{
                setPopupBay({
                    name:'',
                    imageUrl:'',
                    price:null,
                    bay:false
                })
            }, 10000)


        };

        return (
        <div className="main__card">
            <img src={img} alt="AirPods" className="main__card-img"/>
            <h3 className="main__card-title">{title}</h3>
            <p className="main__card-price">{title !== 'Apple Card' ? `$${price}.00` : price}</p>
            <div className="main__card-btns">
                <button className="main__card-btn" type='button' onClick={()=> bayCardHandler(title,img,price) } >{title === 'Apple Card' ? 'Apply' : 'Bay'}</button>
                <button className="main__card-btn" type='button' onClick={()=> deleteCardHandler(id)}>Delete</button>
            </div>

        </div>
    );
};

export default Card;