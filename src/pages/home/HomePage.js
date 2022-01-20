import React from 'react';
import './Homepage.styles.scss';
import MainMenu from '../../components/mainmenu/MainMenu';
import { Route,Routes } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
const HomePage = () => {
    return (
        <div className='homepage'>
             
             
             <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path=":collectionId" element={<CollectionPage />}></Route>
          
        </Routes>
             
               
         </div>
    )
}

export default HomePage;