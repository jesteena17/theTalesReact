import React from 'react';
import './collectionitem.styles.scss';
import CustomButton from '../custombutton/CustomButton';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.action';
import { Route,Routes ,Link} from 'react-router-dom';
import ProductDetailsPage from '../../pages/productdetails/ProductDetailsPage';



const Collectionitem = ({item,AddItem}) => {
  
  const {id,name,price,imageUrl}=item;
 
  


    return (
        <div className='collectionitem'> 
            
        
            <div className='image' style={{backgroundImage:`url(${imageUrl}) `}} />
            <Link to={id}>
<div className='footer'>
<span className='name'>{name}</span>
<span className='price'>&#x20B9;{price}</span>
</div>
</Link>


<CustomButton onClick={()=>{
    AddItem(item);
   
}

} inverted >Add to Cart</CustomButton>


<Routes>
        <Route path=":topicId" element={<ProductDetailsPage />} />
      </Routes>

        </div>
        
                
    );
}


const mapDispatchStateToProps=dispatch=>({
    AddItem:item=>dispatch(AddItem(item))
})


export default connect(null,mapDispatchStateToProps)(Collectionitem);
