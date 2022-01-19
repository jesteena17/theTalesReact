import React from 'react';
import './collectionitem.styles.scss';
import CustomButton from '../custombutton/CustomButton';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.action';



const Collectionitem = ({item,AddItem}) => {
  
  const {id,name,price,imageUrl}=item;
 
  
const dispAnim=()=>{
return(
      <div >
          added to cart
      </div>
  
  )
}

    return (
        <div className='collectionitem'> 
            
            <div className='image' style={{backgroundImage:`url(${imageUrl}) `}} />
<div className='footer'>
<span className='name'>{name}</span>
<span className='price'>&#x20B9;{price}</span>
</div>


<CustomButton onClick={()=>{
    AddItem(item);
   
}

} inverted >Add to Cart</CustomButton>

        </div>
    );
}

const mapDispatchStateToProps=dispatch=>({
    AddItem:item=>dispatch(AddItem(item))
})


export default connect(null,mapDispatchStateToProps)(Collectionitem);
