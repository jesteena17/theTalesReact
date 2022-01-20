import { createSelector } from "reselect";

const selectShop=state=>state.shop;


//ok actually we r passing the catename via url instead of cat id so to get the id of the item in the url going to map the string value("babies")
// into its corresponding Id (1) as in the demo shopdata

const COLLECTION_ID_MAP={
    babies:1,
    girls:2,
    boys:3,
    womens:4,
    mens:5,
    
}




export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)



//find collection.id matching the url parameter of our collection id map

export const selectCollection=collectionUrlParam=>
    createSelector(
        [selectCollections],
        collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])
    )

  