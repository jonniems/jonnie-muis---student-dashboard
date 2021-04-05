import React from 'react';
import Header from "../commons/Header";
import Nav from "../commons/Nav";
import Sidebar from "../commons/Sidebar";
import Footer from "../commons/Footer";
import HomePage from "./HomePage";
import StudentPage from "./StudentPage";
import AssignmentPage from './AssignmentPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Dashboard = () => {

    return (
        <Router>
            <div className='dashboard-container'>
                <Header />
                <Nav />
                <Sidebar />
                <main>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path="/StudentPage/:name" component={StudentPage} />
                        <Route path="/AssignmentPage/:title" component={AssignmentPage} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    )
};

export default Dashboard;
