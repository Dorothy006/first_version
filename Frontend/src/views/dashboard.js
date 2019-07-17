import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Sidebar from "../components/sidebar";
import Footer from "../layout/footer";
// import "../style/dashboard";

const history = createBrowserHistory({ forceRefresh: true });

class Dashboard extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="mainPanel">
                    <div className="content">
                        <div id="dashboard-content" >
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="forFooter">
                        <Footer />
                    </div>
                </div>
            </div>

        );
    }
}


export default Dashboard;

