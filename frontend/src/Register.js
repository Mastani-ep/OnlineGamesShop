import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import NavbarProducts from './NavbarProducts';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Register extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <RegisterForm/>
            </div>
        );
    }
}
export default Register;