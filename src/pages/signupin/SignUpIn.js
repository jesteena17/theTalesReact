import React from 'react';
import './signupin.styles.scss';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';
const SignUpIn = () => {
    return (
        <div className='signupin'>
            <SignIn/>
             <SignUp/>
        </div>
    );
}

export default SignUpIn;
