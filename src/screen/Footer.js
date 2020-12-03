import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
    }

    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }

    render() {
        const { selectedIndex } = this.state
        let Home;
        let Profile;
        let Settings;
        if (selectedIndex === 0) {
            Home = <View style={{ alignItems: 'center' }}>
                <Icon name="home" size={25} color="white" />
                <Text style={{ color: 'white' }}>Home</Text>
            </View>
        } else {
            Home = <View style={{ alignItems: 'center' }}>
                <Icon name="home" size={25} color="black" />
                <Text style={{ color: 'black' }}>Home</Text>
            </View>
        }
        if (selectedIndex === 1) {
            Profile = <View style={{ alignItems: 'center' }}>
                <Icon name="user" size={25} color="white" />
                <Text style={{ color: 'white' }}>My Profile</Text>
            </View>
        } else {
            Profile = <View style={{ alignItems: 'center' }}>
                <Icon name="user" size={25} color="black" />
                <Text style={{ color: 'black' }}>My Profile</Text>
            </View>
        }
        if (selectedIndex === 2) {
            Settings = <View style={{ alignItems: 'center' }}>
                <Icon name="sliders" size={25} color="white" />
                <Text style={{ color: 'white' }}>Settings</Text>
            </View>
        } else {
            Settings = <View style={{ alignItems: 'center' }}>
                <Icon name="sliders" size={25} color="black" />
                <Text style={{ color: 'black' }}>Profile</Text>
            </View>
        }
        const buttons = [Home, Profile, Settings];
        const icons = []
      

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                innerBorderStyle={{ width: 0 }}
                containerStyle={{ height: 45, backgroundColor: '#FF9090', borderWidth: 0 }}
                selectedButtonStyle={{ backgroundColor: '#FF9090'}}
            />
        )
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedIndex: 2
    //       }
    // }

    // render() {
    //     return (
    //         <>
    //             <View>
    //                 <View style={style.icon} onStartShouldSetResponder={() => alert("View click")}>
    //                     <Icon name="home" size={25} color="white" />
    //                     <Text style={style.text}>Home</Text>
    //                 </View>
    //                 {/* <View style={style.button}>
    //                     <Button title="Home" type="clear" />
    //                 </View> */}
    //             </View>
    //             <View>
    //                 <View style={style.icon} onStartShouldSetResponder={() => alert("View click")}>
    //                     <Icon name="user" size={25} color="white" />
    //                     <Text style={style.text}>Profile</Text>
    //                 </View>
    //             </View>
    //             <View>
    //                 <View style={style.icon} onStartShouldSetResponder={() => alert("View click")}>
    //                     <Icon name="sliders" size={25} color="white" />
    //                     <Text style={style.text}>Settings</Text>
    //                 </View>
    //             </View>
    //         </>
    //     )
    // }
}
const style = StyleSheet.create({
    icon: {
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
    },
    textActive: {
        color: 'white',
        fontWeight: 'bold'
    },
    textInActive: {
        color: 'black',
        fontWeight: 'bold'
    }
})
