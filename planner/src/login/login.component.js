import React, { Component } from "react";
import { View } from "react-native";
import { Card, Input, Button } from "react-native-elements";
import { style as appStyle } from "../../app.json";

class Login extends Component 
{
    render()
    {
        return (
            <View style={rootStyle}>
                <View>
                    <Card title="PLANNER" titleStyle={{fontSize: 24}}>
                        <Input
                            placeholder="Username"
                        />
                        <Input
                            placeholder="Password"
                        />
                        <Button
                            title='LOGIN'
                            buttonStyle={{
                                marginTop: 10,
                                backgroundColor: appStyle.colors.secondary,
                                width: 300,
                                height: 45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                    </Card>
                </View>
            </View>

        );
    }
}

const rootStyle=
{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: appStyle.colors.primary
};

export default Login;