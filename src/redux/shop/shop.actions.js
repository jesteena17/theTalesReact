import ShopActionTypes from "./shop.types";


export const updateCollections=collectionmap=>({

    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionmap
})