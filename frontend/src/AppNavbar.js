import React, {Component, useState} from 'react';
import {Container, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';


export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {

        return (
            <Navbar color="dark" dark expand="md" className="topnav">
                <Container fluid>
                <NavbarBrand tag={Link} to="/">OnlineGameShop</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/cart">
                                    <FontAwesomeIcon icon={faCartShopping} /> Cart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/login">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/register">
                                    Register
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
        </Navbar>
        );
    }
}