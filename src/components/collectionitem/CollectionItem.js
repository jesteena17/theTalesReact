import React from 'react';
import './collectionitem.styles.scss';
const Collectionitem = ({id,name,price,imageUrl}) => {
  
  
  
    return (
        <div className='collectionitem'> 
            
            <div className='image' style={{backgroundImage:`url(${imageUrl}) `}} />
<div className='footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>


        </div>
    );
}

export default Collectionitem;
