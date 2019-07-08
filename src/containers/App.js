import {
    Route,
    Router
} from "react-router";
import {
    createHashHistory,
    createBrowserHistory
} from "history";
import React from "react";
import {
    Home,
    Main,
    AmazonUI
} from "./page";
import "./App.css";

const Routes = () => <Router
    history = {
        createHashHistory()
    }>
        <div>
            <Route 
                path = "/"
                exact
                component = {
                    Main
                }/>
            <Route
                path = "/Home"
                component = {
                    Home
                }/>
            <Route
                path = "/AmazonUI"
                component = {
                    AmazonUI
                }
                />
        </div>
    </Router>;

export default Routes;