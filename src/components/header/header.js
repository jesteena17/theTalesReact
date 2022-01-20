import React from 'react';
import { Link } from 'react-router-dom';
// import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import CartIcon from '../carticon/CartIcon';
import CartDropdown from '../cartdropdown/CartDropdown';
import { HeaderContainer,LogoContainer,MenusContainer ,MenuDiv,MenuLink} from './header.styles';






//after adding reduc first step
// now we hv to get pick this currentUser from redux for that use map and connect go down below
const Header = ({currentUser,hidden}) => {
    return (
        <HeaderContainer> 
        <LogoContainer to='/' >
        <span className='logo'>The Tales</span> 

        </LogoContainer>

        
            <MenusContainer>
<MenuLink  to='/shop'>Shop</MenuLink>
<MenuLink  to='/about'>About</MenuLink>
<MenuLink  to='/contact'>Contact</MenuLink>
{
    currentUser?<MenuDiv  onClick={()=>auth.signOut()}>Sign Out</MenuDiv>:
    <MenuLink  to='/signin'>Sign In</MenuLink>
}
<CartIcon/>


            </MenusContainer>
            {
                hidden?null: <CartDropdown/>
            }
           
        </HeaderContainer>
        
    );
}

//map
//state has nested value so to destructure it use ---->  {user:{currentUser},cart:{hidden}}
// const mapStateToProps=(state)=>({
//     currentUser:state.user.currentUser
// })
//after destructuring from state

//befor reselect
// const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
//     currentUser,hidden
// })


//after reselect
 //if we have 5 to 6 such selectrs 
//  currentUser:selectCurrentUser(state),
//  hidden:selectCartHidden(state)
// cause code repeatation to avoid that use CREATERESTRUCTUREDSELECTORS
const mapStateToProps=createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})



export default connect(mapStateToProps) (Header);
//now goto app.js and remove the passed props to header