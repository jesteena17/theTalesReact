import React from 'react';
import './checkoutitem.styles.scss';
import { connect } from 'react-redux';
import { RemoveItem } from '../../redux/cart/cart.action';
import { AddItem } from '../../redux/cart/cart.action';
import { DecrementItem } from '../../redux/cart/cart.action';


const CheckoutItem = ({cartItem,clearItem,addItem,decrementItem}) => {
    const {name,imageUrl,price,quantity}=cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>

                <img src={imageUrl} alt="item"/>
            </div>
<span className='name'>{name}</span>


<span className='quantity'>
    {/* consider the fact that on clicking down arrow below 1 should remove item  */}
    <div className='arrow' onClick={()=>decrementItem(cartItem)}>&#10094;</div>
    <span className='value'>{quantity}</span>
    <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
    </span> 


<span className='price'>${price}</span>
<div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;  </div>
         </div>
    );
}

const mapDispatchToProps=dispatch=>({
clearItem:item=>dispatch(RemoveItem(item)),
addItem:item=>dispatch(AddItem(item)),
decrementItem:item=>dispatch(DecrementItem(item)),

})

export default connect(null,mapDispatchToProps)(CheckoutItem);
