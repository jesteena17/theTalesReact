import { createSelector } from "reselect";

//input selector
//only select a piece of state here is cart
const selectCart=state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.cartItems
)


export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)
export const selectCartIemCount=createSelector(
    [selectCartItems],
cartItems=>cartItems.reduce(
    (accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0
)
)


export const selectCartTotal=createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity*cartItem.price,0
    )
)