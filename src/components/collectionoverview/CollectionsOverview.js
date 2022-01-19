
import React, { Component } from 'react';
import './CollectionsOverview.styles.scss';
import CollectionPreview from '../../components/collectionpreview/CollectionPreview';
import { connect } from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selectors.js';
import { createStructuredSelector } from 'reselect';




 const CollectionsOverview =({collections}) =>{



        return (
            <div className='shopage' >
                
{collections.map(({id,...otherdata})=>{
    return(
        
        <CollectionPreview key={id} {...otherdata} />
        
        
        )
})}


                
                
            </div>
        )
    }

const mapStateToProps=createStructuredSelector({
    collections:selectCollections
})

    export default connect(mapStateToProps) (CollectionsOverview);
