import React from 'react';
import './collectionpreview.styles.scss';
import Collectionitem from '../../components/collectionitem/CollectionItem';
import { Link,Route ,Routes} from 'react-router-dom';
import CollectionPage from '../../pages/collection/CollectionPage';
import CollectionsOverview from '../collectionoverview/CollectionsOverview';



const CollectionPreview = ({routeName,title,items}) => {
    return (
        <div className='collectionpreview'>
            <h1 className='title'>
        
            <Link to={`/shop/${routeName}`}>{title}
          </Link>
         
          
            
                </h1>

<div className='preview'>
{items.filter((itm,idx)=>idx<4)
.map((item)=>(
    
<Collectionitem key={item.id} item={item}/>
    

))}


</div>
        </div>
    );
}

export default CollectionPreview;
