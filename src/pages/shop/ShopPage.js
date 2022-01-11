import React, { Component } from 'react';
import ShopData from './demodata.js';
import CollectionPreview from '../../components/collectionpreview/CollectionPreview';


export default class ShopPage extends Component {

constructor(props)
{
    super(props);
    this.state=
        {collections:ShopData}
    
}


    render() {

        const {collections}=this.state;
        return (
            <div className='shopage'>
                
{collections.map(({id,...otherdata})=>{
    return( <CollectionPreview key={id} {...otherdata} />)
})}


                
                
            </div>
        )
    }
}
