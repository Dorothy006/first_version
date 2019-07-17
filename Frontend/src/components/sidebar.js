import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Container, Nav } from "../components/styled_component";
import '../layout/style.css';
class Sidebar extends React.Component {

    render() {
        return (
                <div>
                    <ul class="sidebar navbar-nav" >
                        <li id="li_dashboard" class="nav-item">
                            <i className="fa fa-home"></i>
                            <Link to="/dashboard" className="link"><span>Dashboard</span></Link> 
                        </li>

                        <li id="li_Affiliates" class="nav-item">
                            <i className="fa fa-empire"></i>
                            <span>Affiliates</span>
                        </li>
                        <li id="li_Stats" class="nav-item">
                            <i className="fa fa-clock-o"></i>
                            <span>Stats</span>
                        </li>

                        <li id="li_Exchange" class="nav-item">
                        <i className="fa fa-line-chart"></i>
                            <span>Exchange</span>
                        </li>
                        <li id="li_CLAM" class="nav-item">
                            <i className="fa fa-chevron-right"></i>
                            <span>CLAM</span>
                        </li>
                        <li id="li_BTC" class="nav-item">
                            <i className="fa fa-chevron-right"></i>
                            <span>BTC</span>
                        </li>
                        <li id="li_CAD" class="nav-item">
                            <i className="fa fa-chevron-right"></i>
                            <span>CAD</span>
                        </li>
                        <li id="li_USD" class="nav-item">
                            <i className="fa fa-chevron-right"></i>
                            <span>USD</span>
                        </li>
                        <li id="li_GOLD" class="nav-item">
                            <i className="fa fa-chevron-right"></i>
                            <span>GOLD</span>
                        </li>
                        <li id="li_Contact" class="nav-item">
                            <i className="fa fa-envelope-square"></i>
                            <span>Contact</span>
                        </li>
                        <li id="li_Logout" class="nav-item">
                            <i className="fa fa-sign-out"></i>
                            <span>Logout</span>
                        </li>
                        <li id="li_ReferralCode" class="nav-item">
                            <span>Referral Code: 123456</span>
                        </li>
                    </ul>
                </div>
        );
    }
}



export default Sidebar;