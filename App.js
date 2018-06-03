import React from "react";
import { View } from 'react-native';

import { AppLoading, Font } from 'expo';

import { createRootNavigator } from "./router";
import { isSignedIn } from "./auth";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false,
            loaded: false
        };
    }

    componentDidMount() {
        isSignedIn()
            .then(res => this.setState({ 
                signedIn: res, 
                checkedSignIn: true }))
            .catch(err => alert("An error occurred"));
            this.loadFontsAsync();
    }

    loadFontsAsync = async () => {
        await Font.loadAsync({gotham: require('./assets/fonts/GothamRoundedMedium.otf')});
        this.setState({loaded: true});
    }

    render() {

        if (!this.state.loaded) {
            return <AppLoading />;
        }

        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) {
            return null;
        }

        const Layout = createRootNavigator(signedIn);

        return <Layout />

    }
}