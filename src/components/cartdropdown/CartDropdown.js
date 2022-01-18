import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cartitem/CartItem';
import CustomButton from '../custombutton/CustomButton' ;
import './cartdropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from "../../redux/cart/cart.action";




const CartDropdown = ({cartItems,dispatch}) => {
    let navigate = useNavigate();


    function handleClick() {
        navigate('/checkout');
        //disptcher access dirctly
        dispatch(toggleCartHidden());
      }




    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {

                cartItems.length?(
            cartItems.map(cartItem => {
       return  <CartItem key={cartItem.id} item={cartItem} />
            })): (<span className='empty-message'>Your Cart is Empty</span>)
            }


           </div>
<CustomButton onClick={handleClick}>Go To Checkout</CustomButton> 
        </div>
    );
}
//befor selector
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
//   });

//after selectr
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
  });


//to use togglecarthiddenaction it is not necessory to write a dispatcher code and pass it to connect,
//bcs react wil automaticaly pass dispatcher as a prop to this component if dont pass a scnd argument to connect
//so we cn directly acess togglcrt hiden in our component as a prop dirctly (we r using it hr bcz we wnt to hide the opnend cartdropdown in checkout page)
export default connect(mapStateToProps)(CartDropdown);
