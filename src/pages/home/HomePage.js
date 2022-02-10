import React from 'react';
// import './Homepage.styles.scss';
import MainMenu from '../../components/mainmenu/MainMenu';
import { Route,Routes } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
import { HomePageContainer } from './HomePage.styles';
import ProductDetailsPage from '../productdetails/ProductDetailsPage';







const HomePage = () => {
    return (
        <HomePageContainer>
             
             
             <Routes>
          <Route path="/" element={<MainMenu />}></Route>
         
          <Route path=":collectionId/*" element={<CollectionPage />}> 
          <Route path=":detailid" element={<ProductDetailsPage />}/>
          </Route>
        </Routes>
             
               
         </HomePageContainer>
    )
}

export default HomePage;