import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../carticon/CartIcon';
import CartDropdown from '../cartdropdown/CartDropdown';
//after adding reduc first step
// now we hv to get pick this currentUser from redux for that use map and connect go down below
const Header = ({currentUser,hidden}) => {
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
            {
                hidden?null: <CartDropdown/>
            }
           
        </div>
        
    );
}

//map
//state has nested value so to destructure it use ---->  {user:{currentUser},cart:{hidden}}
// const mapStateToProps=(state)=>({
//     currentUser:state.user.currentUser
// })
//after destructuring from state
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,hidden
})

export default connect(mapStateToProps) (Header);
//now goto app.js and remove the passed props to header