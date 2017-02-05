/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';

import { SensorManager } from 'NativeModules';


export default class SensorTest extends Component {
  
  state = {
    x: 0,
    y: 0,
    z: 0,
    x1: 0,
    y1: 0,
    z1: 0,
    x2: 0,
    y2: 0,
    z2: 0
  }

  componentDidMount() {
    SensorManager.startAccelerometer(100); // To start the accelerometer with a minimum delay of 100ms between events.
    DeviceEventEmitter.addListener('Accelerometer', (data) => {
      /**
      * data.x
      * data.y
      * data.z
      **/
      this.setState({x:data.x, y:data.y, z:data.z})
    });
    //SensorManager.stopAccelerometer();
    DeviceEventEmitter.addListener('Gyroscope', (data) =>{
    /**
    * data.x
    * data.y
    * data.z
    **/
      this.setState({x1:data.x, y1:data.y, z1:data.z})
    });
    SensorManager.startGyroscope(100);
    //SensorManager.stopGyroscope();
    SensorManager.startMagnetometer(100);
    DeviceEventEmitter.addListener('Magnetometer', (data) => {
    /**
  * data.x
  * data.y
  * data.z
  **/
      this.setState({x2:data.x, y2:data.y, z2:data.z})
    });
    //SensorManager.stopMagnetometer();


  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Accelerometer</Text>
        <Text>X : {this.state.x}</Text>
        <Text>Y : {this.state.y}</Text>
        <Text>Z : {this.state.z}</Text>
        <Text>Gyroscope</Text>
        <Text>X : {this.state.x1}</Text>
        <Text>Y : {this.state.y1}</Text>
        <Text>Z : {this.state.z1}</Text>
        <Text>Magnetometer</Text>
        <Text>X : {this.state.x2}</Text>
        <Text>Y : {this.state.y2}</Text>
        <Text>Z : {this.state.z2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SensorTest', () => SensorTest);
