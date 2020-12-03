import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Button } from 'react-native-elements';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TopCircle from './TopCircle';
import MiddleCircle from './MiddleCircle';
import BottomCircle from './BottomCircle'
export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {


    }

    render() {
        return (
            <View style={{ backgroundColor: '#D3D3D3', height: '100%' }}>
                <TopCircle />
                <Text style={styles.title}>Let's Do InstaSpacing Together</Text>
                <ImageBackground imageStyle={{ opacity: 0.8 }} resizeMode='stretch' source={require('./../../assets/splash.png')} style={styles.backgroundContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                        <MiddleCircle />
                    </View>
                    <View style={{ top: 20 }} >
                        <BottomCircle />
                    </View>
                </ImageBackground>
                <View style={styles.bottomStyle}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <Text style={styles.verticleLine}></Text>
                        <Text style={styles.companyName}>INSTASPACES</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={{ textAlign: 'center', padding: 15, color: 'white', fontWeight: 'bold' }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#282828',
        color: 'black'
    },
    title: {
        bottom: 50,
        left: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    bottomStyle: {
        alignItems: 'center',
        margin: 30
    },
    companyName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        bottom: 70
    },
    verticleLine: {
        bottom: 70,
        height: 40,
        right: 2,
        width: 4,
        backgroundColor: '#FF6666',
    },
    button: {
        backgroundColor: '#FF6666',
        width: '100%',
        borderRadius: 10,
        bottom: 30
    }
});
