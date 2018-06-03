import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Font } from 'expo';

import { onSignIn } from "../../auth";
import { constants } from "../../constants";
import { style } from "../../assets/styles/HeadersStylesheet";

export default class LoggedInHeader extends Component {

    render() {
        return (
            <View style = { style.container }>
                   <Image
                        style={style.headerImage} 
                       source={require("../../assets/images/HumanOsLogo.png")}
                   />
            </View>
        )
    }
}