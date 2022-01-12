import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';


const Header = () => {
    return (
        <div className='header'> 
        <Link className='logocontainer' to='/' >
        <span className='logo'>The Tales</span> 

        </Link>

        
            <div className='menus'>
<Link className='menu' to='/shop'>Shop</Link>
<Link className='menu' to='/about'>About</Link>
<Link className='menu' to='/contact'>Contact</Link>
            </div>
        </div>
    );
}

export default Header;
