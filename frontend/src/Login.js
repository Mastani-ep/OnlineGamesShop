import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import LoginForm from './LoginForm';


class Login extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <LoginForm/>
            </div>
        );
    }
}
export default Login;
