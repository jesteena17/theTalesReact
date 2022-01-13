import React, { Component } from 'react'
import { useState,useEffect } from 'react/';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignUpIn from './pages/signupin/SignUpIn';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';



export default class App extends Component {
constructor()
{
  super();
  this.state={
    currentUser:null
  }
}
unSubscribefromAuth=null;
componentDidMount(){
this.unSubscribefromAuth= auth.onAuthStateChanged(async (userAuth)=>{
// this.setState({currentUser:userAuth})
if(userAuth){
  const userRef=await createUserProfileDocument(userAuth);
userRef.onSnapshot((snapshot)=>{
  // console.log(snapshot.data());
  this.setState({currentUser:{
    id:snapshot.id,
    ...snapshot.data()
  }},()=>{console.log(this.state.currentUser);})
})

}
else{
  this.setState({currentUser:userAuth})
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
        

    <Header currentUser={this.state.currentUser}/>
      <Routes>
<Route  path="/" element={<HomePage/>}/>
<Route  path="/shop" element={<ShopPage/>}/>
<Route  path="/signin" element={<SignUpIn/>}/>

      </Routes>
      
      </div>
    )
  }
}