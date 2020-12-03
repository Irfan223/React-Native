
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get('window');
const height = width * 100 / 60;
const images = [
    require('./../../assets/slider3.jpg'),
    require('./../../assets/slider4.jpg'),
    require('./../../assets/slider5.jpg')
]
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
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
                    this.props.navigation.navigate('Workspace');
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }
     
    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }
    loginWithGoogle = () => {
        alert('hello')
    }
    render() {
        return (
            <View style={style.container}>
               
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: { width, height: '100%', justifyContent: 'center', marginTop: 40, bottom: 0 },
    
});
