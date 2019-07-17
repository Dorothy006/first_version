import React from "react";
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Container, Nav } from "../components/styled_component";
import '../layout/footerStyle.css';
class Footer extends React.Component {

    render() {
        return (
            <div className="footerMenu">
                <ul  className="list-menu">
                    <li id="li_dashboard" class="footer-item">
                        Dashboard
                    </li>
                    <li id="li_Affiliates" class="footer-item">
                        Affiliates
                    </li>
                    <li id="li_Stats" class="footer-item">
                        Stats
                    </li>
                    <li id="li_Exchange" class="footer-item">
                        Exchange
                    </li>
                    <li id="li_Contact" class="footer-item">
                        Contact
                    </li>
                    <li id="li_Logout" class="footer-item">
                        Logout
                    </li>
                    <li id="li_ReferralCode" class="footer-item">
                        Referral Code: 123456
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;
