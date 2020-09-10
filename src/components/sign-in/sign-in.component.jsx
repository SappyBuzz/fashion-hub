import React from 'react';

import './sign-in.component.styles.scss';

import FromInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth,signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }
        
    }

    handelChange = event=>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FromInput 
                    type="email" 
                    name="email" 
                    handelChange={this.handelChange} 
                    value={this.state.email} 
                    label="Email" 
                    required 
                     />
                    <FromInput 
                    type="password" 
                    name="password" 
                    handelChange={this.handelChange} 
                    value={this.state.password} 
                    label="Password" 
                    required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;