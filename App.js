import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook, faBackward, faCalendarDay, faCog, faExclamationCircle, faLongArrowAltLeft, faPhone, faPhoneSquare, faPlus, faSave, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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

import { ContactList } from './Contacts.component.js';
import { Settings } from './Settings.component.js';
// import { currentScreen } from './global.js';

// // import GLOBAL from './global';

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



  const TitleBar = ({ colorMode, styleExtra, onPress, appState }) => {

    if (appState == "contacts") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress}><FontAwesomeIcon icon={faCog} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity><FontAwesomeIcon icon={faUserPlus} color={colorMode} /></TouchableOpacity>
        </View>
      );
    }
    else if (appState == "settings") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress}><FontAwesomeIcon icon={faSave} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity><FontAwesomeIcon icon={faAddressBook} color={colorMode} /></TouchableOpacity>
        </View>
      );
    }
    else if (appState == "call") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress}><FontAwesomeIcon icon={faLongArrowAltLeft} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity><FontAwesomeIcon icon={faExclamationCircle} color={colorMode} /></TouchableOpacity>
        </View>
      );
    }
  }

  const App = () => {

    const [dummy, setDummy] = useState(null);
    const [userMode, setUserMode] = useState(false);                      // false = visitor
    const [currentScreen, setCurrentScreen] = useState("settings");       // which app screen is open?  settings, contacts, call
    const [activeCall, setActiveCall] = useState(null);                   // is there an active call? (may not be used)
    const [dyslexic, setDyslexic] = useState(false);                      // dyslexia friendly font ADA Compliant
    const [contactsList, setContactsList] = useState(null);               // high contrast dark mode ADA Compliant

    const [darkMode, setDarkMode] = useState(false);
    const colorsBG = darkMode ? '#181818' : '#ffffff';
    const colorsMono = darkMode ? '#ffffff' : '#000000';
    const colorsAccent = darkMode ? '#36B048' : '#257933';
    const colorsTitle = darkMode ? '#323232' : '#f0f0ea';
    const styleExtra = {
      accent: {
        backgroundColor: colorsBG,
        color: colorsAccent
      },
      mono: {
        backgroundColor: colorsBG,
        color: colorsMono,
      },
      title: {
        backgroundColor: colorsTitle,
        color: colorsAccent
      }
    }

    const onPress = () => {
      this.setState({
        dummy: 1
      })
    }
    const onPressContacts = () => {
      this.setState({
        dummy: 1
      })
    }
    const onPressSettings = () => {
      this.setState({
        dummy: 1
      })
    }

    return (
      <View style={[styles.container, styleExtra.accent]}>
        <View style={styles.statusBar} />
        <TitleBar colorMode={colorsAccent} styleExtra={styleExtra} 
        appState={currentScreen} onPress={onPress} extraData={darkMode} />
        <Settings userMode={userMode} styleExtra={styleExtra} 
        setUserMode={() => setUserMode(!userMode)} darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />
        {/* <ContactList /> */}
        {/* <Call /> */}
      </View>
    )
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
  title: {
    fontFamily: 'Merriweather_400Regular',
    color: "#257933",
    fontSize: 20
  },
  statusBar: {
    backgroundColor: '#f0f0ea',
    height: Constants.statusBarHeight
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: "#f0f0ea",
    color: '#257933',
    padding: 18
  },
  // button: {
  //   alignItems: 'center',
  //   backgroundColor: '#fff3b3',
  //   padding: 5,
  //   marginBottom: 10
  // },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  }
})