import cartActionTypes from './cart.types';
import { addItemtoCart } from './cart.utils'; 
import { decremntItemQtyfromCart } from './cart.utils';
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
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
                cartItems:addItemtoCart(state.cartItems,action.payload)
            };
            case cartActionTypes.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
                }
                case cartActionTypes.DECREMENT_ITEM:
                    return{
                        ...state,
                        cartItems:decremntItemQtyfromCart(state.cartItems,action.payload)
                    }
        default:
            return state;
    }

}
export default cartReducer;