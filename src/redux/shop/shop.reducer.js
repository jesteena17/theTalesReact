// import SHOP_DATA from "../../pages/shop/demodata"

import ShopActionTypes from "./shop.types";
//this isnt needed anymore bcz we get data from fb
// const INITIAL_STATE={
//     collections:SHOP_DATA
// };

const INITIAL_STATE={
    collections:null
};


const shopReducer=(state=INITIAL_STATE,action)=>{
switch(action.type)
{
case ShopActionTypes.UPDATE_COLLECTIONS:

 return{
     ...state,
     collections:action.payload
 }
    default: 
    return state
}
}

export default shopReducer;