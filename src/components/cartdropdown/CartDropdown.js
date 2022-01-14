import React from 'react';
import CustomButton from '../custombutton/CustomButton' ;
import './cartdropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-item'/>
<CustomButton >Go To Checkout</CustomButton> 
        </div>
    );
}

export default CartDropdown;
