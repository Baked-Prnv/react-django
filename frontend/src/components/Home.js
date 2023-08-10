import React, {Component} from "react";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import {BrowserRouter as Router, Switch, Routes, Route, Link, Redirect } from "react-router-dom";

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<p>This is a home page...</p>}/>
                    <Route path="/join" element={<JoinRoom/>}/>
                    <Route path="/create" element={<CreateRoom/>}/>
                </Routes>
            </Router>
        );
    }
}