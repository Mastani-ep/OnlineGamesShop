import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import NavbarProducts from './NavbarProducts';
import { Button, Container } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        fetch('/hello')
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }

    render() {
        const {products} = this.state;
        return (
            <div>
                <AppNavbar/>
                <NavbarProducts/>
                <Container fluid>
                    Hello {products}!
                </Container>
            </div>
        );
    }
}
export default Home;