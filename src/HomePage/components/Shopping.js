import React, { useContext, useEffect, useState } from 'react';
import { DataWoodenToys } from '../../assets/DataWoodenToys'
import { DataStuffedAnimals } from '../../assets/DataStuffedAnimals'
import ToysCard from '../../shared/UI/ToysCard';

import { ShareContext } from '../../shared/context/share-contex';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './Shopping.css'
function Shopping(props) {
    const share = useContext(ShareContext);

    const [cart, setCart] = useState([]);

    const counts = (arr, id) => {
        return arr.filter(c => c.id === id)
    };
    const cartHandler = (e) => {
        setCart([...cart, { 'id': e.target.parentNode.id, 'price': e.target.dataset['myval'], 'name': e.target.dataset['toyname'], 'image': e.target.dataset['toyimage'] }])
        share.buy([...cart, { 'id': e.target.parentNode.id, 'price': e.target.dataset['myval'] }]);
        share.showModal(true)
    }
    const removeHandler = (x) => {
        const index = cart.findIndex(object => {
            return object.id === x;
        });
        cart.splice(index, 1)
        share.shop.splice(index, 1)
        setCart((current) => current.filter((fruit) => fruit.indexOf !== index));
        share.removeItem(share.shop.filter((fruit) => fruit.indexOf !== index))
    }

    useEffect(() => {
        if (cart.length < 1) {
            setTimeout(() => {
                share.closeModal()
            }, 300)
        }
    }, [cart]);

    return (
        <div className='shopping-container'>
            <ToysCard
                titleSection={'Stuffed Animals'}
                data={DataStuffedAnimals}
                onClick={cartHandler}
            />
            <ToysCard
                titleSection={'Wooden Toys'}
                data={DataWoodenToys}
                onClick={cartHandler}
            />

            <div style={share.show ? { right: '10px' } : null} className="modal_wrapper">
                <div className="modal_content">
                    <AiOutlineCloseCircle className='modal_close' onClick={() => share.closeModal()} />
                    <div className="modal_shopping_list">
                        {[
                            ...new Map(cart.map((item) => [item["id"], item])).values(),
                        ].map((item) => (
                            <div className="modal-item_wrapper" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className='model_item-info'>
                                    <p>{item.name}</p>
                                    <p>{item.price} $</p>
                                </div>
                                <p className='model_item-count'>x {counts(cart, item.id).length} </p>
                                <button className="modal_item-remove" onClick={() => removeHandler(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <p className='modal-items-sum'>Total: <span>{cart.reduce((n, { price }) => n + price * 1, 0)} $</span></p>
                    <button className="modal_btn">Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Shopping;