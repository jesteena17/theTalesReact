import React,{Component, useState} from 'react';
import FormInput from '../forminput/FormInput';
import './signin.styles.scss';
class SignIn extends Component{
    
   constructor()
   {
       super();
       this.state={
           email:'',
           password:''
       }
   }


 handleSubmit=(e)=>{
e.preventDefault();
}



handleChange=(e)=>{
    const {value,name}=e.target;
    this.setState({[name]:value}); //set email or password value as it chnages
    }
        render(){
           return ( 
        <div className='signin'>
<h2>I already have an account</h2>
<span>Sign in with your Email and Password</span>    

<form onSubmit={this.onSubmit}> 
<FormInput type="text" 
name="email"
 label="email"
 value={this.state.email}
 handleChange={this.handleChange}
 />
<FormInput type="password" 
name="password"
label="password "
 value={this.state.password}
 handleChange={this.handleChange}
 />
 <button> Sign In</button>
</form>
        </div>
    );
        }
}

export default SignIn;
