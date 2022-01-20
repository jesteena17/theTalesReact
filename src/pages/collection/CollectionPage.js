import React from 'react';
import './Collectionpage.styles.scss';
import {  useParams } from "react-router-dom";
// import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useSelector } from "react-redux";
 import CollectionItem from '../../components/collectionitem/CollectionItem';


const CollectionPage = () => {
    
    const params = useParams();


    // accessing the selector using useSelector hook bcz i couldnt pass the 
    //  urlparam collection id when using mapstatetoprop geting error colectionid undefined
  //so use this hook  {/* {params.collectionId} */}
    const collection = useSelector(selectCollection(params.collectionId));
// const res=collection.map(itm=>itm.id);
    // console.log(collection);

    const {title,items}=collection;
    return (
        <div className='collection-page'>
           
<h2 className='title'>{title }</h2>
<div className='items'>
{ items.map(item=><CollectionItem   key={item.id} item={item}/>)}
</div>
            
        </div>
    );
}

export default CollectionPage;