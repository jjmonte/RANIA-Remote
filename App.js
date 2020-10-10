import React, { useState, useEffect, Component } from 'react';
 
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook, faCalendarDay, faPhone, faPhoneSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  useFonts,
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic,
} from '@expo-google-fonts/merriweather';
 
export default () => {
  let [fontsLoaded] = useFonts({
    Merriweather_300Light,
    Merriweather_300Light_Italic,
    Merriweather_400Regular,
    Merriweather_400Regular_Italic,
    Merriweather_700Bold,
    Merriweather_700Bold_Italic,
    Merriweather_900Black,
    Merriweather_900Black_Italic,
  });
 
  let fontSize = 24;
  let paddingVertical = 6;

  class MyText extends Component {
    render() {
      return (
          <Text style={{fontFamily: 'Merriweather_400Regular', color: "#257933", fontSize: 20}}>
            {this.props.children}
          </Text>
      );
    }
  }

  class TitleBar extends Component {
    render() {
      return (
        <View style={styles.TitleBar}>
          <TouchableOpacity><FontAwesomeIcon icon = {faAddressBook} color={'#257933'} /></TouchableOpacity>
          <MyText>RANIA Remote</MyText>
          <TouchableOpacity onPress={ this.props.onPress }><FontAwesomeIcon icon = {faPhone} color={'#257933'}/></TouchableOpacity>
        </View>
      );
    }
  }

  class App extends Component {
    state = {
      dummy: 0
    }
  
    onPress = () => {
      this.setState({
        dummy: 1
      })
    }
  
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <TitleBar onPress={this.onPress}>{this.state.userName}</TitleBar>
        {/* <TouchableOpacity
           style={styles.button}
          >
            <Text>You have { this.state.dummy } tasks!</Text>
          </TouchableOpacity> */}
      </View>
    )
    }
    
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <App />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  statusBar: {
    backgroundColor: '#f0f0ea',
    height: Constants.statusBarHeight
  },
  TitleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: "#f0f0ea",
    padding: 15,
  
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff3b3',
    padding: 5,
    marginBottom: 10
  }
})