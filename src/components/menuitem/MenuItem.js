import React from 'react';
import './menuitempage.styles.scss';


//3 props will come to this compo titl,sub titl and image. destructure it directly and use it
const MenuItem = ({title,subtitle,imageUrl,id,size}) => {
    return (
        <div style={{backgroundImage:`url(${imageUrl})`}} className={`menuitem ${size}`}>
        <div className='content'> 
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{subtitle}</span>
        </div>
    </div>
    );
}

export default MenuItem;
