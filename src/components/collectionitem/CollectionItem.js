import React from 'react';
import './collectionitem.styles.scss';
import CustomButton from '../custombutton/CustomButton';



const Collectionitem = ({id,name,price,imageUrl}) => {
  
  
  
    return (
        <div className='collectionitem'> 
            
            <div className='image' style={{backgroundImage:`url(${imageUrl}) `}} />
<div className='footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
<CustomButton inverted>Add to Cart</CustomButton>

        </div>
    );
}

export default Collectionitem;
