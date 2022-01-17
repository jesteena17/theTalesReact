import cartActionTypes from './cart.types';
import { addItemtoCart } from './cart.utils'; 

const INITIAL_STATE={
    hidden:true,
    cartItem:[]
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden:!state.hidden
        };
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,

                // cartItem:[...state.cartItem,action.payload]
                //change this to check if item alredy exist in cart based in utils
                cartItem:addItemtoCart(state.cartItem,action.payload)
            };
        default:
            return state;
    }

}
export default cartReducer;