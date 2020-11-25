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

  const TitleBar = ({ colorMode, fontMode, styleExtra, onPress, appState }) => {

    if (appState == "contacts") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress.settings}><FontAwesomeIcon icon={faCog} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity><FontAwesomeIcon icon={faUserPlus} color={colorMode} /></TouchableOpacity>
        </View>
      );
    }
    else if (appState == "settings") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity><FontAwesomeIcon icon={faSave} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity onPress={onPress.contacts}><FontAwesomeIcon icon={faAddressBook} color={colorMode} /></TouchableOpacity>
        </View>
      );
    }
    else if (appState == "call") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity><FontAwesomeIcon icon={faLongArrowAltLeft} color={colorMode} /></TouchableOpacity>
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
    const [highVisFonts, setHighVisFonts] = useState(false);              // toggle high visibility fonts
    const [contactsList, setContactsList] = useState(null);   
    const [darkMode, setDarkMode] = useState(false);                          // high contrast dark mode ADA Compliant


    // BEGIN VARIABLE STYLING --------------------------------
    // DARK MODE COLOR SELECTORS, USING TERNARY OPS
    const colorsBG = darkMode ? '#181818' : '#ffffff';
    const colorsMono = darkMode ? '#ffffff' : '#000000';
    const colorsAccent = darkMode ? '#36B048' : '#257933';
    const colorsTitle = darkMode ? '#323232' : '#f0f0ea';
    const colorsBorder = darkMode ? '#323232' : '#f0f0ea';
    const colorsItemText = darkMode ? '#ffffff' : '#257933';
    const colorsItemSelect = darkMode ? '#1D5D27' : '#C8F5FF';
    const colorsItemOptions = darkMode ? '#ffffff' : '#32a5f3';

    // HIGH VIS FONT SELECTOR
    const fontModeFamily = highVisFonts ? 'HelveticaNeue-Bold' : 'Merriweather_400Regular';

    const styleExtra = {
      accent: {
        backgroundColor: colorsBG,
        color: colorsAccent,
        borderColor: colorsBorder,
        fontFamily: fontModeFamily
      },
      mono: {
        backgroundColor: colorsBG,
        color: colorsMono,
        borderColor: colorsBorder,
        fontFamily: fontModeFamily
      },
      title: {
        backgroundColor: colorsTitle,
        color: colorsAccent,
        borderColor: colorsBorder,
        fontFamily: fontModeFamily
      },
      item: {
        color: colorsItemText,
        fontFamily: fontModeFamily
      },
      itemSelect: {
        backgroundColor: colorsItemSelect,
        fontFamily: fontModeFamily
      },
      itemOptions: {
        color: colorsItemOptions,
        fontFamily: fontModeFamily
      }
    }
    // END VARIABLE STYLING ----------------------------------

    const onPress = {
      contacts: () => setCurrentScreen('contacts'),
      settings: () => setCurrentScreen('settings')
    };

    if (currentScreen == 'contacts') {
      return (
        <View style={[styles.container, styleExtra.accent]}>
          <View style={styles.statusBar} />
          <TitleBar colorMode={colorsAccent} styleExtra={styleExtra}
            appState={currentScreen} onPress={onPress} extraData={darkMode} />
          {/* <Settings userMode={userMode} styleExtra={styleExtra} 
      setUserMode={() => setUserMode(!userMode)} darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} /> */}
          <ContactList styleExtra={styleExtra} />
          {/* <Call /> */}
        </View>
      )
    }
    if (currentScreen == 'settings') {
      return (
        <View style={[styles.container, styleExtra.accent]}>
          <View style={styles.statusBar} />
          <TitleBar colorMode={colorsAccent} styleExtra={styleExtra}
            appState={currentScreen} onPress={onPress} extraData={darkMode} />
          <Settings userMode={userMode} styleExtra={styleExtra} 
            setUserMode={() => setUserMode(!userMode)} darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} 
            highVisFonts={highVisFonts} setHighVisFonts={() => setHighVisFonts(!highVisFonts)}
          />
          {/* <ContactList styleExtra={styleExtra} /> */}
          {/* <Call /> */}
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
  header: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  }
})