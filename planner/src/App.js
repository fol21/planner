import React, { Component } from "react";
import {Scene, Stack, Router} from "react-native-router-flux";
import  Login  from "./login/login.component";
import { style as AppStyle } from "../app.json";

export default class App extends Component {
    render() 
    {
        return (
            <Router>
                <Stack>
                    <Scene 
                        key="login" 
                        component={Login} 
                        hideNavBar
                    />
                </Stack> 
            </Router>
        );
    }
}
