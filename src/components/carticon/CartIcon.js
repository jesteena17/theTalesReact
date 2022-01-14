import React from 'react';
import './carticon.styles.scss';
import {ReactComponent as ShoppingIcon}  from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
           <ShoppingIcon className='shopping-icon'/>
           <span className='item-count'>0</span> 
        </div>
    );
}

const mapDispatchtoProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
    });
export default connect(null,mapDispatchtoProps)(CartIcon);
