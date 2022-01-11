import React from 'react';
import './collectionpreview.styles.scss';
import Collectionitem from '../../components/collectionitem/CollectionItem';




const CollectionPreview = ({title,items}) => {
    return (
        <div className='collectionpreview'>
            <h1 className='title'>{title}</h1>

<div className='preview'>
{items.filter((itm,idx)=>idx<4).map(({id,...itm})=>{ 
    return (
<Collectionitem key={id} {...itm}/>
    )

})}


</div>
        </div>
    );
}

export default CollectionPreview;
