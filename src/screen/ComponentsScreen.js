
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
export default class ComponentsScreen extends Component {
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
                {/* Start Carousel */}
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    style={style.scroll}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={image}
                                style={style.image} />
                        ))
                    }
                </ScrollView>
                {/* End Carousel */}
                {/* start Dot Code */}
                <Text style={style.title}>Network Of Reliable Workspaces</Text>
                <View style={style.pagination}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k == this.state.active ? style.pagingActiveText : style.pagingText}>⬤</Text>
                        ))
                    }
                </View>
                {/* End Dot code */}
                {/* Start Login Button */}
                <View style={{ position: 'absolute', width: '90%', alignSelf: 'center', bottom: 50 }}>
                    <View><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={style.button}><Text style={style.text}>Login</Text></TouchableOpacity></View>
                    {/* <View style={style.spacer}></View> */}
                    {/* <View style={style.spacer}></View> */}
                    <View><TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} style={style.button}><Text style={style.text}>Create An Account</Text></TouchableOpacity></View>
                    {/* <View style={style.spacer}></View> */}
                    <View><TouchableOpacity onPress={this.signupLater}><Text style={style.signupLater}>I Will signup later</Text></TouchableOpacity></View>
                </View>
                {/* End Login Button */}
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: { width, height: '100%', justifyContent: 'center', marginTop: 40, bottom: 0 },
    scroll: { width, height: '100%' },
    image: { width, height: '100%', resizeMode: 'stretch' },
    title: { flexDirection: 'row', fontSize: 30, position: 'absolute', top: '40%', color: 'white', textAlign: 'center' },
    pagination: { flexDirection: 'row', position: 'absolute', bottom: '35%', alignSelf: 'center' },
    pagingText: { color: '#888', fontSize: 15, margin: 3 },
    pagingActiveText: { color: '#fff', fontSize: 15, margin: 3 },
    spacer: { padding: 0 },
    button: {
        alignItems: "center",
        backgroundColor: "#FF6666",
        padding: 15,
        borderRadius: 50,
        margin: 8
    },
    text: {
        color: "white",
        fontWeight: 'bold'
    },
    signupLater: {
        textAlign: 'center',
        color: 'white'
    }
});
