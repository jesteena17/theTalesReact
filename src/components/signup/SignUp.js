
import React, { Component } from 'react'

import FormInput from '../forminput/FormInput';
import CustomButton from '../custombutton/CustomButton';
import './signup.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';




export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '', 
            confirmPassword: ''

        }
    }


 onSubmit=async (e)=>{
    const {displayName,email,password,confirmPassword}=this.state;
e.preventDefault();
if(password!==confirmPassword)
{
 alert("Passwords  don't match");
}
//  return ;
try {
    const {user}=await auth.createUserWithEmailAndPassword(email,password);
createUserProfileDocument(user,{displayName});
this.setState({
displayName: '',
email: '',
password: '', 
confirmPassword: ''
});
} catch (error) {
    console.error(error);
}

}

handleChange=(e)=>{
const {name,value}=e.target;
this.setState({[name]:value})
}

    render() {
        const {displayName,email,password,confirmPassword}=this.state;
        return (
            <div className='sign-up'>
<h2>I don not have an account</h2>
<span>Sign up with your email and password </span>
<form onSubmit={this.onSubmit}>
<FormInput 
type="text"
name="displayName" 
label="Full Name"
value={displayName}
required
handleChange={this.handleChange}/>
<FormInput 
type="text"
name="email" 
label="Email"
value={email}
required
handleChange={this.handleChange}/>

<FormInput
type="password"
 name="password" 
label="Password"
value={password}
required
handleChange={this.handleChange}/>


<FormInput
type="password"
 name="confirmPassword" 
label="Confirm Password"
value={confirmPassword}
required
handleChange={this.handleChange}/>


<CustomButton type="submit">Sign Up</CustomButton>
</form>
            </div>
        )
    }
}

