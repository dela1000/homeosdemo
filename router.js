import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignIn from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import Home from "./src/components/Home";
import Profile from "./src/components/Profile";

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight - 25 : 0,
    backgroundColor: 'white',
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0
};

export const SignedOut = createStackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            headerStyle,
            titleStyle: {
                textAlign: 'center',
            },
            tintColor: 'white',
            headerLeft: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            headerLeft: null,
            headerStyle,
            titleStyle: {
                textAlign: 'center',
            },
            tintColor: 'white',
        }
    },
});

export const SignedIn = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => ( <
                FontAwesome name = "home"
                size = { 20 } color = { tintColor }
                />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => ( <
                FontAwesome name = "user"
                size = { 20 } color = { tintColor }
                />
            )
        }
    }
}, {
    tabBarOptions: {
        style: {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            backgroundColor: 'transparent',
            elevation: 0,
            borderTopWidth: 0
        },
        showIcon: true,
        showLabel: true,
        activeTintColor: 'black',
        inactiveTintColor: '#dbdbdb',
        style: {
            backgroundColor: '#f9f9f9',
            borderTopWidth: 0
        },
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
});

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator({
        SignedIn: {
            screen: SignedIn
        },
        SignedOut: {
            screen: SignedOut
        }
    }, {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    });
};