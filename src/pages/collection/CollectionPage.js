import React from 'react';
import './Collectionpage.styles.scss';
import {  useParams } from "react-router-dom";



const CollectionPage = () => {
    const params = useParams();
    return (
        <div className='collection-page'>
            {params.category}
        </div>
    );
}

export default CollectionPage;
