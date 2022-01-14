import cartActionTypes from "./cart.types";

export  const toggleCartHidden=()=>({
     type:cartActionTypes.TOGGLE_CART_HIDDEN,
     //paylod is optional
})


export const AddItem=(item)=>({
     type:cartActionTypes.ADD_ITEM,
     payload:item
})