import React from 'react';
import './menuitempage.styles.scss';
import { Link } from 'react-router-dom';


//3 props will come to this compo titl,sub titl and image. destructure it directly and use it
const MenuItem = ({ title, subtitle, imageUrl, id, size, urlLink }) => {


    return (
        // <div style={{backgroundImage:`url(${imageUrl})`}} className={`menuitem ${size}`}> //original
        //here image is having a hover effect it enlarges,here doing a trick bcz i dont want my image go out of this main div so removing the style from this div and adding it to a new div inside this div
        //changed

        <Link className={`menuitem ${size}`}  to={urlLink}>

            {/* new div with old style  and add anew classname to it*/}



            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>


        </Link>



    );
}

export default MenuItem;
