import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cartitem/CartItem';
import CustomButton from '../custombutton/CustomButton' ;
import './cartdropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';


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
//befor selector
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
//   });

//after selectr
const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
  });
  

export default connect(mapStateToProps)(CartDropdown);
