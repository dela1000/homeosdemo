import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView, StatusBar, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';

import { onSignIn } from "../../auth";
import { constants } from "../../constants";

export default class SignUp extends Component {

    render() {
        return (
            <View>
                <Text>
                    Login
                </Text>
            </View>
        )
    }
}