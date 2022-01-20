import React from 'react';
import './Collectionpage.styles.scss';
import {  useParams } from "react-router-dom";
// import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useSelector } from "react-redux";



const CollectionPage = () => {
    
    const params = useParams();


    // accessing the selector using useSelector hook bcz i couldnt pass the 
    //  urlparam collection id when using mapstatetoprop geting error colectionid undefined
  //so use this hook  {/* {params.collectionId} */}
    const collection = useSelector(selectCollection(params.collectionId));
// const res=collection.map(itm=>itm.id);
    // console.log(collection);
    return (
        <div className='collection-page'>
           

            {collection.items.map(i=>i.name)}
        </div>
    );
}

export default CollectionPage;