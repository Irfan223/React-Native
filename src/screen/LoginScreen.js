import React, { Component, Fragment } from 'react'
import {
    ScrollView,
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    SafeAreaView
} from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SocialIcon } from 'react-native-elements';
import Toast from 'react-native-root-toast';
import FormInput from './../../components/FormInput';
import FormButton from './../../components/FormButton';
import ErrorMessage from './../../components/ErrorMessage';
import TopCircle from './TopCircle';
import Spinner from 'react-native-loading-spinner-overlay';
import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    username: Yup.string()
        .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
    password: Yup.string()
        .label('Password')
        .required()
        .min(5, 'Password must have more than 4 characters ')
})

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            spinner: false
        }
    }
    componentDidMount() {
        // this.asyncStorage();
    }
    // onChange = (key, val) => {
    //     this.setState({
    //         ...this.state,
    //         [key]: val
    //     })
    // }
    handleSubmit = (values) => {

        this.setState({
            spinner: true
        });

        if (values.username.length > 0 && values.password.length > 0) {
            const options = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                params: {
                    email: values.username,
                    pwd: values.password,
                    RequestType: 'client'
                }
            }
            axios.post('https://www.instaspaces.in/Login', null, options)
                .then((res) => {
                    if (res.data.message === 1) {
                        (async () => {
                            try {
                                await AsyncStorage.setItem('name', res.data.name);
                                await AsyncStorage.setItem('email', values.username);
                                await AsyncStorage.setItem('mobile', res.data.mobile);
                                await AsyncStorage.setItem('mverified', res.data.mverified.toString());
                                await AsyncStorage.setItem('token', res.data.token);
                                this.props.navigation.navigate('FindSpace');
                            } catch (err) {
                                console.log(err);
                            }
                        })();
                    } else if (res.data.message === 2) {
                        alert('hello')
                    } else if (res.data.message === 0) {

                    } else if (res.data.message === -1) {

                    }
                    this.setState({
                        spinner: false
                    });
                })
                .catch((err) => {
                    console.log(err);
                })
            // this.setState({ spinner: false })
        }
    }

    render() {
        // const { username, password } = this.state;
        return (
            // <ImageBackground source={require('./../../assets/instalogo.png')} style={style.backgroundImage}>
            <SafeAreaView style={style.container}>
                <TopCircle />
                <Text style={style.welcome}>Welcome Back !</Text>
                <Image source={require('./../../assets/login.png')} style={style.image} />
                <View style={{ marginTop: 130, padding: 20, align: 'center' }}>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={values => { this.handleSubmit(values) }}
                        validationSchema={validationSchema}>
                        {({
                            handleChange,
                            values,
                            handleSubmit,
                            errors,
                            isValid,
                            touched,
                            handleBlur,
                            isSubmitting
                        }) => (
                                <Fragment>

                                    <FormInput
                                        name="username"
                                        value={values.username}
                                        onChangeText={handleChange('username')}
                                        placeholder='Enter Email ID'
                                        onBlur={handleBlur('username')}
                                    />
                                    <ErrorMessage errorValue={touched.username && errors.username} />
                                    <FormInput
                                        name="password"
                                        secureTextEntry={true}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        placeholder='Enter Password'
                                        onBlur={handleBlur('password')}
                                    />
                                    <ErrorMessage errorValue={touched.password && errors.password} />
                                    <View style={{ bottom: 35, alignSelf: 'flex-end', flexDirection: 'row' }}>
                                        <Button color="#FF6666" type="clear" title="Forgot Password" />
                                        <Text style={{ top: 10, fontWeight: 'bold', color: '#FF6666' }}>?</Text>
                                    </View>
                                    <View style={{ bottom: 30 }}>
                                        <FormButton
                                            onPress={handleSubmit}
                                            title="Login"
                                            buttonStyle={{
                                                padding: 13,
                                                borderRadius: 50,
                                                margin: 0,
                                                backgroundColor: '#FF6666'
                                            }}
                                            buttonColor="white"
                                            disabled={!isValid || isSubmitting}
                                        // loading={isSubmitting}
                                        />
                                    </View>
                                </Fragment>
                            )}
                    </Formik>
                    <Spinner
                        visible={this.state.spinner}
                        textContent={'Loading...'}
                        animation='fade'
                        textStyle={style.spinnerTextStyle}
                    />
                    <View style={{ flexDirection: 'row', bottom: 10, alignItems: 'center' }}>
                        <View style={{ flex: 1 }}><Divider style={{ height: 2 }} /></View>
                        <View><Text style={{ width: 110, textAlign: 'center', fontWeight: 'bold', color: 'grey' }}>or signin with</Text></View>
                        <View style={{ flex: 1 }}><Divider style={{ height: 2 }} /></View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 0 }}>
                        <View style={{ width: '50%' }}>
                            <SocialIcon button type='google' title='Google' onPress={this.loginWithGoogle}></SocialIcon>
                        </View>
                        <View style={{ width: '50%' }}>
                            <SocialIcon button type='linkedin' title='LinkedIn' onPress={this.loginWithGoogle}></SocialIcon>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 17, paddingTop: 7 }}>Don't have an Account?</Text>
                        <Button type="clear" title="Sing Up Now" onPress={() => this.props.navigation.navigate('SignUp')} />
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#D3D3D3',
        height: '100%',
    },
    welcome: {
        textAlign: 'center',
        color: '#FF6666',
        fontSize: 30,
        bottom: 120,
        fontWeight: 'bold'
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        top: 90,
        position: 'absolute',
    },
    title: {
        padding: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    spinnerTextStyle: {
        color: '#FFF'
    }
})