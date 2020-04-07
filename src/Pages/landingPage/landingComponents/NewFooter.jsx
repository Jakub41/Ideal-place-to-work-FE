import React, {useState} from 'react';
import { Container, Row, Col, Modal } from 'reactstrap'
import Api from '../../../Api';
import LoginModal from "../../login/LoginModal";
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import "../landingComponents/NewFooter.css"
import alpha from "../../../images/AlphaTeam.png"

const NewFooter = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [profilePic, setProfilePic] = useState("")

    const toggle = () => setIsOpen(!isOpen);

    const fetchUser = async() => {
        if(localStorage.getItem('access_token') !== undefined) {
            const me = await Api.fetch('/users/me', "GET", "", {"Authorization": "Bearer " + 
            localStorage.getItem('access_token')})
            console.log(me)
            setProfilePic(me.picture)
        } 
    }

    useEffect(() => {
        fetchUser()
    }, [])

        return (
            <Container id="new-footer" fluid>

                <Row className="footer-items">

                    <Link id="home-link" to="/"><Col id="home"> HOME </Col></Link>

                    <Link to="/favs"><Col id="favs"> FAVS </Col></Link>

                    {profilePic ? <Col
                        onClick={() => {
                        localStorage.setItem('access_token', undefined)
                        setProfilePic(undefined)}} ><img src={profilePic} id="user-profile-pic"/></Col>:
                        <LoginModal fetchUser={fetchUser} />}
                      

                    <Col onClick={() => {
                        localStorage.setItem('access_token', undefined)
                        setProfilePic(undefined)}} id="logout"> LOGOUT </Col>

                    <Col className="copyright-items" col-6> <img src={alpha} id="copyright-img"/> <Row id="copyright"> © Alpha Nomad Team 2020 </Row>  </Col>
                    

                </Row>    
            </Container>
        );
    }

export default NewFooter;