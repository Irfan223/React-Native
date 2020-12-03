import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
// import GoogleSearchScreen from './GoogleSearchScreen';
import DatePicker from './DatePicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const workspaceType = [
    { value: 0, label: 'Select Workspace', disabled: true },
    { value: 1, label: 'Meeting Room' },
    { value: 2, label: 'Training/ Events Space' },
    { value: 3, label: 'Board Room' },
    { value: 4, label: 'Conference Room' },
    { value: 5, label: 'Inspirational Space' },
    { value: 6, label: 'Hot Desk' },
    { value: 7, label: 'Dedicated Desk' }
];
const attendees = [
    { value: 0, label: 'Select Attendees', disabled: true },
    { value: 1, label: '1' },
    { value: 2, label: '2-6' },
    { value: 3, label: '7-14' },
    { value: 4, label: '15-30' },
    { value: 5, label: '31-50' },
    { value: 6, label: '51-100' },
    { value: 7, label: '100+' }
];

export default class OnDemandFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedWorkspaces: [],
            attendees: '',
            date: "2016-05-15",
        }
        this.controller;
    }
    render() {
        return (
            <>
                <View style={{ paddingTop: 0 }}>
                    <Divider style={{ height: 2 }} />
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ paddingTop: 10,}}>
                            <Icon name="briefcase" size={30} color="#FF9090" />
                        </View>
                        <View style={{ width: '90%', }}>
                            <DropDownPicker
                                items={workspaceType}
                                multiple={true}
                                multipleText="%d items have been selected."
                                min={0}
                                max={10}
                                defaultValue={this.state.selectedWorkspaces}
                                controller={instance => this.controller = instance}
                                onChangeList={(items, callback) => {
                                    this.setState({
                                        items // items: items
                                    }, callback);
                                }}
                                placeholder="WorkSpace Type"
                                dropDownMaxHeight={250}

                                containerStyle={{ height: 45 }}
                                style={{ backgroundColor: 'white', borderWidth: 0 }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                    fontSize: 30,
                                }}
                                labelStyle={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: 'grey'
                                }}
                                dropDownStyle={{ backgroundColor: 'whitesmoke', }}
                                onChangeItem={item => this.setState({
                                    selectedWorkspaces: item
                                })}
                            />
                        </View>
                    </View>
                    <Divider style={{ height: 2 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ paddingTop: 10, }}>
                            <Icon name="users" size={30} color="#FF9090" />
                        </View>
                        <View style={{ width: '90%' }}>
                            <DropDownPicker
                                items={attendees}
                                controller={instance => this.controller = instance}
                                onChangeList={(items, callback) => {
                                    this.setState({
                                        items // items: items
                                    }, callback);
                                }}
                                placeholder="Number Of Attendeed"
                                dropDownMaxHeight={250}
                                containerStyle={{ height: 45 }}
                                style={{ backgroundColor: 'white', borderWidth: 0 }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                labelStyle={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: 'grey'
                                }}
                                dropDownStyle={{ backgroundColor: 'whitesmoke' }}
                                onChangeItem={item => this.setState({
                                    attendees: item.value
                                })}
                            />
                        </View>
                    </View>
                    <Divider style={{ height: 2 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ top: 5, paddingRight: 10 }}>
                            <Icon name="calendar" size={30} color="#FF9090" />
                        </View>
                        <View style={{ width: '90%' }}>
                            <DatePicker />
                        </View>
                    </View>
                    <Divider style={{ height: 2 }} />
                    <View style={{ paddingTop: 10 }}>
                        <Button buttonStyle={{ backgroundColor: '#FF9090', borderRadius: 25, padding: 10 }} title="Search" />
                    </View>
                </View>
            </>
        )
    }
}
