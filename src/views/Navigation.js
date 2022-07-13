import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../logo.svg'
import profile from '../profile.jpg'
class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                        &nbsp;Reactjs Simple
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">
                        <img
                            src={profile}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;