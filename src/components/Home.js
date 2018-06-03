import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { navigation } from "react-navigation";
import LoggedInHeader from "../headers/LoggedInHeader";
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';


import _ from 'lodash';

import { style } from "../../assets/styles/stylesheet";

import { fetchData } from "../../auth";
import { constants } from "../../constants";

export default class Home extends Component {

    state = {
       mute: false,
       shouldPlay: false,
     }
    
     handlePlayAndPause = () => {  
       this.setState((prevState) => ({
          shouldPlay: !prevState.shouldPlay
       }));
     }


    logout = () => {
        this.props.navigation.navigate('SignedOut')
    }

    render() {

        const videoWidth = Dimensions.get('window').width;
        const videoHeight = videoWidth * (9 / 16);
        const centeredContentWidth = 60;

        return (
            <View style={ style.container }>
                <LoggedInHeader />
                <StatusBar  barStyle="light-content" />
                <View style={style.videoContainer}>
                    <Video
                        source={{ uri: 'https://player.vimeo.com/external/216961828.hd.mp4?s=49d2f0c55a50696f5950f9df389d8fbb1f4a35f2&profile_id=169' }}
                        shouldPlay={this.state.shouldPlay}
                        muted={this.state.mute}
                        rate={1.0}
                        volume={1.0}
                        resizeMode="cover"
                        style={{ 
                            width: videoWidth - 5, 
                            height: videoHeight, 
                        }}
                    />
                    <View style={style.controlBar}>
                        <MaterialIcons 
                            name={this.state.shouldPlay ? "pause" : "play-arrow"} 
                            size={45} 
                            color="white" 
                            onPress={this.handlePlayAndPause} 
                        />
                    </View>
                </View>
            </View>
        );
    }
}

