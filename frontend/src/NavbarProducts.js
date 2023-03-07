import React, {Component, useState} from 'react';
import {Container, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faClose} from '@fortawesome/free-solid-svg-icons';

const links = [
    { href: '/all', text: 'All' },
    { href: '/adventure', text: 'Adventure' },
    { href: '/strategy', text: 'Strategy' },
    { href: '/action', text: 'Action' },
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
        <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
);

export default class NavbarProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false, setMobile:false, sideBarIsOpen: true};
    }

    handleResize = () => {
        if(window.innerWidth<1065) {
            this.setState({
                setMobile: true,
            });
        }else{
            this.setState({
                setMobile: false,
            });
        }
    };

    openSideBar = () =>{
        this.setState({
            sideBarIsOpen: (!this.state.sideBarIsOpen),
        })
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <>
                {!this.state.setMobile && (
                    <Navbar expand="md" className="justify-content-center product-nav">
                    <Nav navbar className="navmenu">
                        {links.map(createNavItem)}
                    </Nav>
                    </Navbar>)}

                {this.state.setMobile  && this.state.sideBarIsOpen && (
                    <div className={this.state.sideBarIsOpen ? "sidebar is-open" : "sidebar"}>
                        <div className="sidebar-header">
                            <Container fluid>
                                <FontAwesomeIcon icon={faClose} onClick={this.openSideBar} size="lg"  className="close-sidebar-icon"/>
                            </Container>
                        </div>
                        <div className="side-menu">
                            <Nav vertical className="list-unstyled pb-3 navmenu">
                                {links.map(createNavItem)}
                            </Nav>
                        </div>
                    </div>
                    )}

                {this.state.setMobile && !this.state.sideBarIsOpen && (
                    <Container fluid >
                        <FontAwesomeIcon icon={faArrowRight} onClick={this.openSideBar} size="lg" className="show-sidebar-icon" />
                    </Container>
                )}
            </>
        );
    }
}