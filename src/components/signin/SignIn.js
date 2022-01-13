import React, { Component } from 'react';
import CustomButton from '../custombutton/CustomButton';
import FormInput from '../forminput/FormInput';
import './signin.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
// import { signInWithGit } from '../../firebase/firebase.utils';
// import { signInWithFb } from '../../firebase/firebase.utils';


class SignIn extends Component {

   constructor() {
      super();
      this.state = {
         email: '',
         password: ''
      }
   }


   handleSubmit =  async(e) => {
      e.preventDefault();

const {email,password}=this.state;
try {
   await auth.signInWithEmailAndPassword(email,password)
} catch (error) {
console.error(error);
}

      this.setState({
         email: '',
         password: ''
      })
   }



   handleChange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value }); //set email or password value as it chnages
   }
   render() {
      return (
         <div className='signin'>
            <h2>I already have an account</h2>
            <span>Sign in with your Email and Password</span>

            <form onSubmit={this.onSubmit}>
               <FormInput type="text"
                  name="email"
                  label="email"
                  value={this.state.email}
                  required
                  handleChange={this.handleChange}
               />
               <FormInput type="password"
                  name="password"
                  label="password "
                  value={this.state.password}
                  required
                  handleChange={this.handleChange}
               />
               <div className='buttons'>

                  <CustomButton type="submit">
                     Sign In {/* Sign In  text btween btn tag is reffered as the children */}
                  </CustomButton>
                  <CustomButton isgooglebtn={true} onClick={signInWithGoogle}>
                     Sign In With Google
                  </CustomButton>
                  {/* <CustomButton isgooglebtn={true} onClick={signInWithGit}>
    Sign In With Git
 </CustomButton> */}
                  {/* <CustomButton isgooglebtn={true} onClick={signInWithFb}>
    Sign In With fb
 </CustomButton> */}

               </div>

            </form>
         </div>
      );
   }
}

export default SignIn;
