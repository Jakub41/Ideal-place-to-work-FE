import React, {useState} from 'react';
import Home from "../../../icons/Home.png"
import Heart from "../../../icons/Faves.png"
import User from "../../../icons/User.png"
import LoginModal from "../../login/LoginModal";
import {Link} from "react-router-dom";


const Footer = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="footer-icons-container">
                <Link to="/"> <div className="footer-icon footer-home">
                    <img src={Home} alt="Home" className="home-icon"/>
                    <h3 className="home-text">Home</h3>
                </div></Link>
                <div className="footer-icon footer-heart">
                    <img src={Heart} alt="Home"/>
                </div>
                <div className="footer-icon footer-user">
                    <LoginModal />
                </div>
            </div>
        </div>
    );
};

export default Footer;
