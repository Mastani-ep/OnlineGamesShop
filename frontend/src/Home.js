import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import NavbarProducts from './NavbarProducts';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <NavbarProducts/>
                <Container fluid>
                    <Button color="link"><Link to="/products">Products</Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;