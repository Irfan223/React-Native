import React, { Component } from 'react'
import {View, Text, ScrollView, StyleSheet } from 'react-native';
import {Image, Button, Divider} from 'react-native-elements';
import { MeetingRooms, BoardRooms, TrainingRooms, VideoConferenceRooms, PrivateOffice, InterviewRooms } from './StaticData';
export default class ScrollSpaces extends Component {
    render() {
        return (
            <>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.title}>MEETING ROOMS</Text>
                        <Button title="VIEW ALL" type="clear" titleStyle={style.button} />
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        {
                            MeetingRooms.map((item, index) => {
                                return (<View key={index}>
                                    <Image source={{ uri: item.imgUrl }}
                                        style={{ width: 100, height: 70, margin: 5, borderRadius: 5 }} />
                                     <Text style={{textAlign:'center', width: 100, fontSize: 12}}>{item.location}</Text>   
                                </View>)
                            })
                        }
                    </View>
                    <Divider style={{height: 2}} />
                    {/* Start Board Room */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.title}>BOARD ROOMS</Text>
                        <Button title="VIEW ALL" type="clear" titleStyle={style.button} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        {
                            BoardRooms.map((item, index) => {
                                return (<View key={index}>
                                    <Image source={{ uri: item.imgUrl }}
                                        style={{ width: 100, height: 70, margin: 5, borderRadius: 5 }} />
                                        <Text style={{textAlign:'center', width: 100, fontSize: 12}}>{item.location}</Text>   
                                </View>)
                            })
                        }
                    </View>
                    <Divider style={{height: 2}} />
                    {/* End Board Room */}
                    {/* Start Board Room */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.title}>TRAINING ROOMS</Text>
                        <Button title="VIEW ALL" type="clear" titleStyle={style.button} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        {
                            TrainingRooms.map((item, index) => {
                                return (<View key={index}>
                                    <Image source={{ uri: item.imgUrl }}
                                        style={{ width: 100, height: 70, margin: 5, borderRadius: 5 }} />
                                        <Text style={{textAlign:'center', width: 100, fontSize: 12}}>{item.location}</Text>   
                                </View>)
                            })
                        }
                    </View>
                    <Divider style={{height: 2}} />
                    {/* End Board Room */}
                    {/* Start Board Room */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.title}>VIDEO CONFERENCE ROOMS</Text>
                        <Button title="VIEW ALL" type="clear" titleStyle={style.button} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        {
                            VideoConferenceRooms.map((item, index) => {
                                return (<View key={index}>
                                    <Image source={{ uri: item.imgUrl }}
                                       style={{ width: 100, height: 70, margin: 5, borderRadius: 5 }} />
                                       <Text style={{textAlign:'center', width: 100, fontSize: 12}}>{item.location}</Text>   
                                </View>)
                            })
                        }
                    </View>
                    <Divider style={{height: 2}} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.title}>PRIVATE OFFICE</Text>
                        <Button title="VIEW ALL" type="clear" titleStyle={style.button} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        {
                            PrivateOffice.map((item, index) => {
                                return (<View key={index}>
                                    <Image source={{ uri: item.imgUrl }}
                                        style={{ width: 100, height: 70, margin: 5, borderRadius: 5 }} />
                                        <Text style={{textAlign:'center', width: 100, fontSize: 12}}>{item.location}</Text>   
                                </View>)
                            })
                        }
                    </View>
                    <Divider style={{height: 2}} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.title}>INTERVIEW ROOMS</Text>
                        <Button title="VIEW ALL" type="clear" titleStyle={style.button} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        {
                            InterviewRooms.map((item, index) => {
                                return (<View key={index}>
                                    <Image source={{ uri: item.imgUrl }}
                                        style={{ width: 100, height: 70, margin: 5, borderRadius: 5 }} />
                                        <Text style={{textAlign:'center', width: 100, fontSize: 12}}>{item.location}</Text>   
                                </View>)
                            })
                        }
                    </View>
                    {/* End Board Room */}
                </ScrollView>
            </>
        )
    }
}

const style = StyleSheet.create({
    button: {
        fontSize: 13
    },
    title: {
        paddingTop: 10,
        paddingLeft: 5,
        color: 'grey',
        fontSize: 12,
        fontWeight: 'bold'
    }
})