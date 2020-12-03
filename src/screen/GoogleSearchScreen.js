import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
navigator.geolocation = require('@react-native-community/geolocation');
export default class GoogleSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: '',
      long: ''
    }
  }

  render() {
    const {address, lat, long} = this.state;
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder='Search by Location'
          currentLocation={true}
          currentLocationLabel='Current location'
          autoFocus={true}
          fetchDetails={true}

          styles={{
            // textInputContainer: {
            //   backgroundColor: '#FF6666',
            // },
            textInput: {
              height: 50,
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
              margin: 5
            },
          }}
          isRowScrollable={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data)
            const address = data.description;
            const lat = details.geometry.location.lat;
            const long = details.geometry.location.long;
            this.props.navigation.navigate('FindSpace', {address: address, lat: lat, long: long});
          }}
          query={{
            key: 'AIzaSyAhQKKHj2X8jiyiZfhUeYNaAvFFOybvqsA',
            language: 'en',
            components: 'country:in',
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%'
  },
});
