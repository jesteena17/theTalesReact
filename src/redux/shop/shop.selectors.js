import { createSelector } from "reselect";

const selectShop=state=>state.shop;


//ok actually we r passing the catename via url instead of cat id so to get the id of the item in the url going to map the string value("babies")
// into its corresponding Id (1) as in the demo shopdata

// as we converted array to object this is nt required anymore
// (1)
// const COLLECTION_ID_MAP={
//     babies:1,
//     girls:2,
//     boys:3,
//     womens:4,
//     mens:5,
    
// }




export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)

//shop page will not work anymore bcz it expects an array and we are passing in an object
//what we cn do is we will connvert the object with keys into an array and the pass the collection

// (4)

export const selectCollectionsForPreview=createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
    )







//find collection.id matching the url parameter of our collection id map
//if store our data as an object this array lookup will take way lot more  time so instead we can store data as 
//object(so convert demo shop data from array to an object with a unique id/key like we stor data in firebase)
//this is called data-normalization
export const selectCollection=collectionUrlParam=>
    createSelector(
        [selectCollections],
        //array(2)
        // collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])
//object(3)
collections=>collections[collectionUrlParam]
    )

  