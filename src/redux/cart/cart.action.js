import cartActionTypes from "./cart.types";

export  const toggleCartHidden=()=>({
     type:cartActionTypes.TOGGLE_CART_HIDDEN,
     //paylod is optional
})

//same is used for incremnt item qty
export const AddItem=(item)=>({
     type:cartActionTypes.ADD_ITEM,
     payload:item
})

export const RemoveItem=(item)=>({
     type:cartActionTypes.REMOVE_ITEM,
     payload:item
})

export const DecrementItem=(item)=>({
     type:cartActionTypes.DECREMENT_ITEM,
     payload:item
})
