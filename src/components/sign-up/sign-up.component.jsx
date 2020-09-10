import React from 'react';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword: ''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword ){
            alert("Password doesn't match.");
            return;
        }
        try{
           
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{ displayName });
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword: ''
            });

        }catch(error){
            console.log(error);
        }
    }

    handelChange = event=>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="titel">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handelSubmit}>
                    <FromInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handelChange}
                    label="Display Name"
                    required
                    />

                    <FromInput 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handelChange}
                    label="Email"
                    required
                    />

                    <FromInput 
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handelChange}
                    label="Password"
                    required
                    />

                    <FromInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handelChange}
                    label="Confirm Password"
                    required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                    
                </form>
            </div>

        );
    }

}

export default SignUp;