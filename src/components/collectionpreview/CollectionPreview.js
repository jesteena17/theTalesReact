import React from 'react';
import './collectionpreview.styles.scss';
import Collectionitem from '../../components/collectionitem/CollectionItem';




const CollectionPreview = ({title,items}) => {
    return (
        <div className='collectionpreview'>
            <h1 className='title'>{title}</h1>

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
