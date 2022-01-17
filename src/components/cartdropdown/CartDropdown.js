import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cartitem/CartItem';
import CustomButton from '../custombutton/CustomButton' ;
import './cartdropdown.styles.scss';



const CartDropdown = ({cartItems}) => {
    console.log(cartItems);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
            cartItems.map(cartItem => {
       return  <CartItem key={cartItem.id} item={cartItem} />
            })
            }


           </div>
<CustomButton >Go To Checkout</CustomButton> 
        </div>
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems

  });

export default connect(mapStateToProps)(CartDropdown);
