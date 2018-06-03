import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { navigation } from "react-navigation";
import LoggedInHeader from "../headers/LoggedInHeader";


import { style } from "../../assets/styles/stylesheet";

import { fetchData } from "../../auth";
import { constants } from "../../constants";

export default class Home extends Component {


    logout = () => {
        this.props.navigation.navigate('SignedOut')
    }

    render() {
        return (

            <View style={ style.container }>
                <LoggedInHeader />
                <StatusBar  barStyle="light-content" />
                <View style={style.logoutContainer}>
                    <View style={style.logoutButton}>
                        <TouchableOpacity onPress={this.logout.bind()}>
                            <Text style={style.buttonText}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            
            
        )
    }
}

