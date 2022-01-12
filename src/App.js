import React, { Component } from 'react'
import { useState,useEffect } from 'react/';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignUpIn from './pages/signupin/SignUpIn';
import { auth } from './firebase/firebase.utils';



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
this.unSubscribefromAuth= auth.onAuthStateChanged((user)=>{
this.setState({currentUser:user})
console.log(this.state.currentUser);
})
}
componentWillUnmount(){
this.unSubscribefromAuth();
console.log(this.state.currentUser);
}
  

render() {
    return (
      <div>
        

    <Header/>
      <Routes>
<Route  path="/" element={<HomePage/>}/>
<Route  path="/shop" element={<ShopPage/>}/>
<Route  path="/signin" element={<SignUpIn/>}/>

      </Routes>
      
      </div>
    )
  }
}