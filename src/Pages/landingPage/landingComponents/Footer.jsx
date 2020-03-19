import React, {useState} from 'react';
import Home from "../../../icons/Home.png"
import Heart from "../../../icons/Faves.png"
import User from "../../../icons/User.png"


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <div className="footer-icons-container">
                <div className="footer-icon footer-home">
                    <img src={Home} alt="Home" className="home-icon"/>
                    <h3>Home</h3>
                </div>
                <div className="footer-icon footer-heart">
                    <img src={Heart} alt="Home"/>
                </div>
                <div className="footer-icon footer-user">
                    <img src={User} alt="Home"/>
                </div>
            </div>
        </div>
    );
};

export default Example;