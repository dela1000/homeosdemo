import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { Font } from 'expo';

import { onSignIn } from "../../auth";
import { constants } from "../../constants";
import { style } from "../../assets/styles/stylesheet";

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        };
    }

    signUp = () => {
        console.log("+++ 21 Login.js this.state.email: ", this.state.email)
        console.log("+++ 22 Login.js this.state.password: ", this.state.password)
        let signedIn = onSignIn('result.username_goes_here', "result.userId_goes_here", "result.token_goes_here")
        if(signedIn){
            this.props.navigation.navigate('SignedIn')
        } else {
            this.state.password = null;
        }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { style.container }>
                <StatusBar  barStyle="light-content" />
                <View style = { style.logoContainer }>
                    <Image style={ style.logo } source={require("../../assets/images/HumanOsLogo.png")} />
                </View>
                <View style = { style.formContainer }>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        style={style.input}
                        onSubmitEditing={() => this.passwordInput.focus()} 
                        KeyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.email}
                        returnKeyType="next"
                        returnKeyLabel="Next"
                    >
                    </TextInput>
                    
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        style={style.input}
                        ref={(input) => this.passwordInput = input }
                        onSubmitEditing={() => this.confirmPasswordInput.focus()} 
                        KeyboardType=""
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.password}
                        returnKeyType="next"
                        returnKeyLabel="Next"
                    >
                    </TextInput>

                    <TextInput 
                        placeholder="Confirm Password"
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        style={style.input}
                        ref={(input) => this.confirmPasswordInput = input }
                        onSubmitEditing={() => this.login.bind()} 
                        KeyboardType=""
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.password}
                        returnKeyType="go"
                        returnKeyLabel="Go"
                    >

                    </TextInput>
                    <TouchableOpacity style={style.buttonContainer} onPress={this.signUp.bind()}>
                        <Text style={style.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.buttonContainer} onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={style.buttonText}>
                            Back to Login
                        </Text>
                    </TouchableOpacity>
                </View>
                

            </KeyboardAvoidingView>
        )
    }
}