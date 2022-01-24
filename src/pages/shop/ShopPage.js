import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collectionoverview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { Route,Routes } from 'react-router-dom';
import { firestore,auth,convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner';



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

const CollectionOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

 class ShopPage extends Component {
    unSubscribeFromSnapshot=null; 
    
    state={
        loading:true,
    }


     componentDidMount(){
const {updateCollections}=this.props; 

const collectionRef=firestore.collection('collections');
collectionRef.onSnapshot(async snapshot=>{
    // console.log(snapshot)
    const collectionsmap=convertCollectionsSnapshopToMap(snapshot);
    // console.log(collectionsmap );
    updateCollections(collectionsmap);
    this.setState({loading:false});
});

}



  render() {
      const {loading,...props}=this.state;
    return (
        <div className='shopage' style={{"paddingTop": "87px"}}>
           
           <Routes>
      {/* <Route path="/" element={<CollectionsOverview/>}></Route>
      <Route path=":collectionId" element={<CollectionPage />}></Route>
       */}

<Route path="/"
element={<CollectionOverviewWithSpinner isLoading={loading} {...props}/>} 
></Route>
      <Route path=":collectionId" 
      element={<CollectionPageWithSpinner isLoading={loading} {...props}/>}></Route>
      
    </Routes>
        </div>
    )
  }
}


const mapDisptachToProps= (dispatch)=>({

    updateCollections:(collectionsMap)=>{
                dispatch(updateCollections(collectionsMap))
    }
});

    export default connect(null,mapDisptachToProps)(ShopPage);
