import React, { Component } from 'react'
import { Text , StatusBar, View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Fragment } from 'react-native';
import { Input, ButtonGroup, Button, Divider, Header, ListItem, Image, Card, IconWrapper, SearchBar } from 'react-native-elements';
import DrawerScreen from './DatePicker';
import GoogleSearchScreen from './GoogleSearchScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import TopCircle from './TopCircle';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import OnDemandFilter from './OnDemandFilter';
import Footer from './Footer';
// import DatePicker from 'react-native-datepicker';
import DatePicker from './DatePicker';
import ScrollSpaces from './ScrollSpaces';

export default class FindSpaceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            address: 'Where do you want',
            latitude: '',
            longitude: '',
            activeButtonBackground: '#FF6666',
            inActiveButtonBackground: '#FFFFFF',
        }
        this.controller;
    }
    componentDidMount() {
        
    }
    componentDidUpdate(prevProps) {
        //Typical usage, don't forget to compare the props
        if (this.props.navigation.getParam('address') !== prevProps.navigation.getParam('address')) {
            this.setState({
                address: this.props.navigation.getParam('address')
            })
        }
    }

    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex });
    }

    virtualOffice = () => {
        this.setState({
            activeButtonBackground: '#FFFFFF',
            inActiveButtonBackground: '#FF6666',
        })
    }

    onDemand = () => {
        this.setState({
            activeButtonBackground: '#FF6666',
            inActiveButtonBackground: '#FFFFFF',
        })
    }
    getData() {
        const options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            params: {
                city: 'Delhi',
                latitude: this.props.route.lat,
                longitude: this.props.route.long
            }
        }
        axios.post('https://www.instaspaces.in/InventoryAPI', null, options)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {

        const buttons = ['On Demand', 'Virtual Office']
        const { selectedIndex } = this.state

        return (
            <>
                {/* <View style={style.buttonText}> */}
                {/* <View elevation={5} style={{ backgroundColor: 'white', height: '100%' }}> */}

                {/* Start Filter Code */}
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FF9090" translucent = {true}/>
                <View style={{ height: '100%', backgroundColor: 'white' }}>
                    <View style={{ height: '50%' }}>
                        <TopCircle />
                        <View style={{ bottom: 120, marginLeft: 20, marginRight: 20, }}>
                            <Text style={style.title}>Find Spaces</Text>
                            <ButtonGroup
                                onPress={this.updateIndex}
                                selectedIndex={selectedIndex}
                                buttons={buttons}
                                // buttonStyle={{opacity:0.8}}
                                containerStyle={{ borderColor: '#FF9090', borderRadius: 15, borderWidth: 2 }}
                                selectedButtonStyle={{ backgroundColor: '#FF9090',  }}
                                textStyle={{ fontWeight: 'bold'}}
                                innerBorderStyle={{ width: 0 }}
                            />
                            {/* Filter Code */}
                            {/* Start Google Serach */}
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ top: 0, paddingRight: 10,}}>
                                    <Icon name="map-marker" size={40} color="#FF9090" />
                                </View>
                                <View>
                                    <Button
                                        buttonStyle={{ justifyContent: 'flex-start', width: '100%' }}
                                        titleStyle={{ color: 'grey' }}
                                        title={this.state.address} type="clear"
                                        onPress={() => { this.props.navigation.navigate('GoogleSearch') }} />
                                </View>
                            </View>
                            {/* End Google Serach */}
                            <View>
                                <OnDemandFilter />
                            </View>

                        </View>
                    </View>
                    {/* Start Shadow code */}
                    <View style={{ overflow: 'hidden', paddingBottom: 15 }}>
                        <View
                            style={{
                                backgroundColor: '#fff',
                                height: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity: 0.4,
                                shadowRadius: 3,
                                elevation: 5,
                                borderBottomLeftRadius: 25,
                                borderBottomRightRadius: 25
                            }}
                        />
                    </View>
                    {/* End Shadow code */}
                    {/* End Filter Code */}
                    {/* Start Content code */}
                    <View style={{ top: 0, flex: 6, backgroundColor: '#DCDCDC' }}>
                        <View style={{ marginLeft: 15, marginRight: 15, }}>
                            <ScrollSpaces />
                        </View>

                    </View>
                    {/* End Content Code */}
                    <View style={{ bottom: 0,   backgroundColor: '#FF9090' }}>
                        <Footer  />
                    </View>
                    {/* </View> */}
                    {/* </View> */}
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    buttonText: {
        bottom: 150
    },
    button: {
        flexDirection: 'row',
        padding: 20
    },
    title: {
        paddingBottom: 10,
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    Card: {
        margin: 0,
    }
})