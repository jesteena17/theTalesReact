import React from 'react';
import './carticon.styles.scss';
import {ReactComponent as ShoppingIcon}  from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartIemCount } from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden,itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
           <ShoppingIcon className='shopping-icon'/>
           <span className='item-count'>{itemCount}</span> 
        </div>
    );
}

const mapDispatchtoProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
    });
//before selector
/*
    const mapStateToProps=({cart:{cartItems}})=>({
        //this is called a selecto bce off of the cart object we are only taking the qty here ie, only a piece of object
        //this item count will re-render the cart icon component every time evenif ther is no chnge in the value of qty .
        // this will cause performance issue
        //so we will use caching callaed momoization using re-selector library
        itemCount : cartItems.reduce(
            (accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0
    )
    })
    */
// after using selctor
    const mapStateToProps=(state)=>({
        
        itemCount : selectCartIemCount(state)

    })
// export default connect(null,mapDispatchtoProps)(CartIcon);
//changed after getting qtycnt from null to new qty val
export default connect(mapStateToProps,mapDispatchtoProps)(CartIcon);