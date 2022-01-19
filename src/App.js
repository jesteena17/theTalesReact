import React, { Component } from 'react'
// import { useState,useEffect } from 'react/';
import './App.css';
import { Route, Routes ,Navigate} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignUpIn from './pages/signupin/SignUpIn';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/CheckoutPage';
import CollectionPage from './pages/collection/CollectionPage';




class App extends Component {
  // after adding reducer we dont want this anymore

// constructor()
// {
//   super();
//   this.state={
//     currentUser:null
//   }
// }
unSubscribefromAuth=null;
componentDidMount(){
const {setCurrentUser}=this.props;

this.unSubscribefromAuth= auth.onAuthStateChanged(async (userAuth)=>{
// this.setState({currentUser:userAuth})
if(userAuth){
  const userRef=await createUserProfileDocument(userAuth);

// going to rewrite this to passin an action for reducer

//   userRef.onSnapshot((snapshot)=>{
//   // console.log(snapshot.data());
//   this.setState({currentUser:{
//     id:snapshot.id,
//     ...snapshot.data()
//   }});
// })



//rewrote to pass reducer an action
userRef.onSnapshot(snapshot=>{
  setCurrentUser({
    id:snapshot.id,
    ...snapshot.data()
  });
})

setCurrentUser(userAuth)


}
else{
  // this.setState({currentUser:userAuth})
  //after reducer
  setCurrentUser(userAuth)
}

// console.log(this.state.currentUser);
})



}
componentWillUnmount(){
this.unSubscribefromAuth();
// console.log(this.state.currentUser);
}
  
 
render() {
    return (
      <div>
        
{/* 
    <Header currentUser={this.state.currentUser}/> */}

{/* use reducer to set state to header */}

<Header/>
      <Routes>

<Route path='/checkout' element={<CheckoutPage/>}/>
<Route path='/babies' element={<CheckoutPage/>}/>
<Route   path="/shop/*" element={<ShopPage/>}>

<Route  path=":category" element={<CollectionPage />} />
  </Route>
<Route path="/signin" element={!this.props.currentUser ? <SignUpIn /> : <Navigate to="/" />} /> 
<Route  path="/*" element={<HomePage/>}>

<Route  path=":category" element={<CollectionPage />} />
  </Route>
      </Routes>
      
      </div>
    )
  }
}
//get the updated state
const mapStateToProps=createStructuredSelector(
  {
    currentUser:selectCurrentUser,
  })

  const mapDispatchToProps=(dispatch)=>({
    setCurrentUser:(user)=>{
      dispatch(setCurrentUser(user))
    }
  })
  //first param null bcz appa doesnt want manipulate setcurrentuser state here
  //and remov the constructr and state we dnt need anymore


// export default connect(null,mapDispatchToProps)(App);


//update this with updated state
export default connect(mapStateToProps,mapDispatchToProps)(App);
