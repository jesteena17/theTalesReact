import React, { Component } from 'react';

import CollectionsOverview from '../../components/collectionoverview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { Route,Routes } from 'react-router-dom';



 const ShopPage =() =>{



        return (
            <div className='shopage' style={{"paddingTop": "87px"}}>
               
               <Routes>
          <Route path="/" element={<CollectionsOverview/>}></Route>
          <Route path=":category" element={<CollectionPage />}></Route>
          
        </Routes>


   
            </div>
        )
    }


    export default ShopPage;
