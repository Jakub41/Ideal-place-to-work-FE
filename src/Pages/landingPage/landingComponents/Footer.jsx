import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, ButtonGroup, Button
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{backgroundColor: '#4a8121'}} light expand="md">
                <NavbarToggler onClick={toggle}/>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <ButtonGroup className="footer-home-div">
                            <button className="footer-home"> 🏠 Home</button>
                        </ButtonGroup>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Example;