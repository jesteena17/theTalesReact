import React from 'react';
// import './Homepage.styles.scss';
import MainMenu from '../../components/mainmenu/MainMenu';
import { Route,Routes } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
import { HomePageContainer } from './HomePage.styles';







const HomePage = () => {
    return (
        <HomePageContainer>
             
             
             <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path=":collectionId" element={<CollectionPage />}></Route>
          
        </Routes>
             
               
         </HomePageContainer>
    )
}

export default HomePage;