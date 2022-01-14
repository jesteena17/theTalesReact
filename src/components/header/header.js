import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../carticon/CartIcon';

//after adding reduc first step
// now we hv to get pick this currentUser from redux for that use map and connect go down below
const Header = ({currentUser}) => {
    return (
        <div className='header'> 
        <Link className='logocontainer' to='/' >
        <span className='logo'>The Tales</span> 

        </Link>

        
            <div className='menus'>
<Link className='menu' to='/shop'>Shop</Link>
<Link className='menu' to='/about'>About</Link>
<Link className='menu' to='/contact'>Contact</Link>
{
    currentUser?<div className='menu' onClick={()=>auth.signOut()}>Sign Out</div>:<Link className='menu' to='/signin'>Sign In</Link>
}
<CartIcon/>


            </div>
        </div>
    );
}

//map
const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps) (Header);
//now goto app.js and remove the passed props to header