import React, { Component } from 'react';

import CollectionsOverview from '../../components/collectionoverview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { Route,Routes } from 'react-router-dom';
import { firestore,auth,convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';

/*
 const ShopPage =() =>{
return (
            <div className='shopage' style={{"paddingTop": "87px"}}>
               
               <Routes>
          <Route path="/" element={<CollectionsOverview/>}></Route>
          <Route path=":collectionId" element={<CollectionPage />}></Route>
          
        </Routes>
            </div>
        )
    }

*/
//now to fetch data from firebase we need a class level component with lifecyclemthod
//so tht all the child compo will get data when the app loads



 class ShopPage extends Component {
    unSubscribeFromSnapshot=null; 
    
    constructor(){
         super();
     }


     componentDidMount(){
const collectionRef=firestore.collection('collections');
collectionRef.onSnapshot(async snapshot=>
    // console.log(snapshot)
    convertCollectionsSnapshopToMap(snapshot)
 )}



  render() {
    return (
        <div className='shopage' style={{"paddingTop": "87px"}}>
           
           <Routes>
      <Route path="/" element={<CollectionsOverview/>}></Route>
      <Route path=":collectionId" element={<CollectionPage />}></Route>
      
    </Routes>
        </div>
    )
  }
}


    export default ShopPage;
