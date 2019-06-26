import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Container, Nav } from "../components/styled_component";
import '../layout/style.css';
class Layout extends React.Component {

    render() {
        return (
            <body>
                {/* static navbar - bottom */}
                <div>
                    <Nav className="navbar fixed-top nav-secondary is-dark is-light-text" id="bottom_navbar">
                        <Container className="text-medium">Dashboard</Container>
                        <Container className="text-medium">Affiliates</Container>
                        <Container className="text-medium">Stats</Container>
                        <Container className="text-medium">Exchange</Container>
                        <Container className="text-medium">Contact</Container>
                        <Container className="text-medium">Logout</Container>
                        <Container className="text-medium">Referral Code</Container>
                    </Nav>
                </div>
                {/* sidebar */}
                <div id="wrapper">

                    <ul class="sidebar navbar-nav" >
                        <li id="li_dashboard" class="nav-item">
                            
                                <i class="fal fa-home"></i>
                                <span>Dashboard</span>
                            
                        </li>
                        <li id="li_Affiliates" class="nav-item">

                            <i class="fas fa-user"></i>
                            <span>Affiliates</span>
                        </li>
                        <li id="li_Stats" class="nav-item">

                            <i class="fas fa-door-open"></i>
                            <span>Stats</span>
                        </li>

                        <li id="li_Exchange" class="nav-item">

                            <i class="fas fa-envelope"></i>
                            <span>Exchange</span>
                        </li>
                        <li id="li_CLAM" class="nav-item">

                            <i class="fas fa-sign-in-alt"></i>
                            <span>CLAM</span>
                        </li>
                        <li id="li_BTC" class="nav-item">

                            <i class="fas fa-sign-in-alt"></i>
                            <span>BTC</span>
                        </li>
                        <li id="li_CAD" class="nav-item">

                            <i class="fas fa-sign-in-alt"></i>
                            <span>CAD</span>
                        </li>
                        <li id="li_USD" class="nav-item">

                            <i class="fas fa-sign-in-alt"></i>
                            <span>USD</span>
                        </li>
                        <li id="li_GOLD" class="nav-item">

                            <i class="fas fa-sign-in-alt"></i>
                            <span>GOLD</span>
                        </li>
                        <li id="li_Contact" class="nav-item">

                            <i class="fas fa-sign-in-alt"></i>
                            <span>Contact</span>
                        </li>
                        <li id="li_Logout" class="nav-item">

                            <i class="fas fa-users"></i>
                            <span>Logout</span>
                        </li>
                        <li id="li_ReferralCodeg" class="nav-item">

                            <i class="fas fa-car"></i>
                            <span>Referral Code</span>
                        </li>
                    </ul>
                </div>

            </body>
        );
    }
}



export default Layout;

