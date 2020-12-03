import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { createAppContainer , SafeAreaView} from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
export default class AuthScreen extends Component {
    render() {
        return (
            <View>
                {/* <Text>Auth Screen</Text> */}
            </View>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    componentDidMount() {
        (async () => {
            try {
                const name = await AsyncStorage.getItem('name');
                const mobile = await AsyncStorage.getItem('mobile');
                const email = await AsyncStorage.getItem('email');
                const token = await AsyncStorage.getItem('token');
                const mverified = await AsyncStorage.getItem('mverified');

                if (name !== null && email !== null && mobile !== null && token !==null) {
                    this.props.navigation.navigate('FindSpace');
                } else {
                    this.props.navigation.navigate('Splash');
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }
}
