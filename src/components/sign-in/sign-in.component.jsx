import React from 'react';

import './sign-in.component.styles.scss';

import FromInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handelSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''});
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

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;