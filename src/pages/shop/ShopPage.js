import React, { Component } from 'react';

import CollectionsOverview from '../../components/collectionoverview/CollectionsOverview';

 const ShopPage =({collections}) =>{



        return (
            <div className='shopage' style={{"paddingTop": "87px"}}>
                
<CollectionsOverview/>

                
                
            </div>
        )
    }


    export default ShopPage;
