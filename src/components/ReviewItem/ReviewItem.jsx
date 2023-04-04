import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product}) => {
    const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='p-text'>${price}</span></p>              
                <p>Quantity:<span className='p-text'>${price}</span></p> 
            </div>
 {/*---------------------- delete button ------------------------- */}
                <button className='btn-delete'>
                    <FontAwesomeIcon  className='delete-icon' icon={faTrashAlt} />
                    </button>             
        </div>
    );
};

export default ReviewItem;