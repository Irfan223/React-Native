import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormInput from './../../components/FormInput';
import FormButton from './../../components/FormButton';
import ErrorMessage from './../../components/ErrorMessage';
import TopCircle from './TopCircle';
import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .label('Name')
        .min(3, 'Must have at least 3 characters')
        .required('Please enter a valid name'),
    username: Yup.string()
        .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
    mobile: Yup.string()
        .label('Number')
        .min(10, 'number must be 10 digits')
        .required('Please enter a valid number'),
    password: Yup.string()
        .label('Password')
        .required()
        .min(5, 'Password must have more than 5 characters ')
})

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { spinner: false };
    }
    componentDidMount() {
        // this.asyncStorage();
    }
    handleSubmit = (values) => {
        // console.log(values)
        if (values.username.length > 0 && values.password.length > 0) {
            const options = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                params: {
                    name: values.name,
                    mobile: values.mobile,
                    email: values.username,
                    pwd: values.password,
                    src: 'SearchNow'
                }
            }
            axios.post('https://www.instaspaces.in/Registration', null, options)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.message === -1) {
                        alert('Instaspaces Account already exists. Please Login or Reset Password');
                    } else if (res.data.message === 1) {
                        alert('You have been registered successfully!')
                    }
                    if (res.data.message === 1) {
                        (async () => {
                            try {
                                await AsyncStorage.setItem('name', res.data.name);
                                await AsyncStorage.setItem('email', values.username);
                                await AsyncStorage.setItem('mobile', res.data.mobile);
                                await AsyncStorage.setItem('mverified', res.data.mverified.toString());
                                await AsyncStorage.setItem('token', res.data.token);
                                this.props.navigation.navigate('SignUp');
                            } catch (err) {
                                console.log(err);
                            }
                        })();
                    } else if (res.data.message === 2) {
                        alert('hello')
                    } else if (res.data.message === 0) {

                    } else if (res.data.message === -1) {
                        alert('Instaspaces Account already exists. Please Login or Reset Password');
                    } else {
                        alert('New user registration failed, Please try again');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    render() {
        return (
            <SafeAreaView style={style.container}>
                {/* <Image style={style.image} source={require('./../../assets/instalogo.png')} />
                <Text style={style.title}>INSTASPACES</Text> */}
                <TopCircle />
                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#FF6666' }}>Welcome Onboard !</Text>
                <ScrollView style={{ padding: 20, align: 'center' }}>
                    <Formik
                        initialValues={{ name: '', mobile: '', username: '', password: '' }}
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
                                    <View>
                                        <FormInput
                                            name="name"
                                            value={values.name}
                                            onChangeText={handleChange('name')}
                                            placeholder='Enter Name'
                                            onBlur={handleBlur('name')}
                                        />
                                        <ErrorMessage errorValue={touched.name && errors.name} />
                                    </View>
                                    <View style={{ bottom: 20 }}>
                                        <FormInput
                                            name="username"
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            placeholder='Enter Email'
                                            onBlur={handleBlur('username')}
                                        />
                                        <ErrorMessage errorValue={touched.username && errors.username} />
                                    </View>
                                    <View style={{ bottom: 40 }}>

                                        <FormInput
                                            name="mobile"
                                            keyboardType="numeric"
                                            value={values.mobile}
                                            onChangeText={handleChange('mobile')}
                                            placeholder='Enter Mobile No'
                                            onBlur={handleBlur('mobile')}
                                        />
                                        <ErrorMessage errorValue={touched.mobile && errors.mobile} />
                                    </View>
                                    <View style={{ bottom: 60 }}>
                                        <FormInput
                                            name="password"
                                            secureTextEntry={true}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            placeholder='Enter Password'
                                            onBlur={handleBlur('password')}
                                        />
                                        <ErrorMessage errorValue={touched.password && errors.password} />
                                    </View>
                                    <View style={{ bottom: 80 }}>
                                        <FormButton
                                            buttonType="outline"
                                            onPress={handleSubmit}
                                            title="Sign Up"
                                            buttonStyle={{
                                                padding: 13,
                                                borderRadius: 50,
                                                margin: 8,
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
                    <View style={{ flexDirection: 'row', paddingTop: 0, flex: 1, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 17, paddingTop: 7 }}>Already have an Account?</Text>
                        <Button type="clear" title="Sign in" onPress={() => this.props.navigation.navigate('Login')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#D3D3D3',
        height: '100%',
    },
    image: {
        marginTop: 20,
        alignSelf: 'center',
        width: 100,
        height: 100
    },
    title: {
        padding: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    input: {
        padding: -20,
    }
})