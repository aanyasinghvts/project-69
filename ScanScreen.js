import React from 'react';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class ScanScreen extends React.Component {
constructor(){
  super();
  this.state={
  hasCameraPermissions: null,
  scanned: false,
  scannedData: '',
  buttonState: 'normal',
  }
}

getCameraPermissions=async ()=>{
  const {status}=await Permissions.askAsync(Permissions.CAMERA)
  this.setState({
   hasCameraPermissions: status==='granted',
   buttonState: 'clicked',
   scanned: false
  });
}

handleBarCodeScanned = async({type, data})=>{
  const {buttonState} = this.state

  if(buttonState==='clicked'){
    this.setState({
      scanned: false,
      scannedData: data
    });
  }
  else if(buttonState==='normal'){
    this.setState({
      scanned: false,
      scannedData: data
    });
  } 
}
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.displayText}>Dummy QR code output</Text>

          <TouchableOpacity 
          onPress={this.getCameraPermissions}
          style={styles.scanButton}
          title = "BarCodeScanner">
          <Text style={styles.ButtonText}>Scan QR code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center' 
      },

      displayText:{ 
        fontSize: 15, 
        textDecorationLine: 'underline'
       }, 

      scanButton:{ 
        backgroundColor: '#2196F3', 
        padding: 10, 
        margin: 10 
      }, 

      buttonText:{ 
        fontSize: 20, 
      } 
    });