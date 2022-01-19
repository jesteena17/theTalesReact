import { combineReducers } from "redux";
import { persistReducer  } from "redux-persist";
import storage from "redux-persist/lib/storage";//to use localstorage
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']//for now we need to localy storage cart bcz user is being stored nd mnged by firebase
}


const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
})


export default persistReducer(persistConfig,rootReducer )