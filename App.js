import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook, faCog, faExclamationTriangle, faLongArrowAltLeft, faSave, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { addContact, contactsData, removeContact } from './Storage.js';

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
import { Call } from './Call.component.js';
import { Emergency } from './Emergency.component.js';

// Export custom fonts, to be used across app. This is not imported to other files because functional components were used.
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

  // TITLE BAR / TOP BAR / NAVIGATION BAR
  // This component displays the persisting Title Bar which is shown on all screens of the app.
  // On the title bar are navigation buttons which enable the user to traverse the app's various screens such as settings, contacts, call, etc.

  const TitleBar = ({ colorMode, styleExtra, onPress, appState, userMode, newContactOnPress }) => {
    // TOP BAR / TITLE BAR / NAV BAR
    // PERSISTS ON ALL VIEWS OF APP + CONTAINS ICONS TO NAVIGATE VARIOUS APP SCREENS
    if (appState == "contacts") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress.settings}><FontAwesomeIcon icon={faCog} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity onPress={newContactOnPress}><FontAwesomeIcon icon={faUserPlus} color={colorMode} /></TouchableOpacity>
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
    // VISITOR MODE, SHOW EMERGENCY BUTTON
    else if (appState == "call" && userMode == false) {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress.contacts}><FontAwesomeIcon icon={faLongArrowAltLeft} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity onPress={onPress.emergency}><FontAwesomeIcon icon={faExclamationTriangle} color={'#C54E3E'} /></TouchableOpacity>
        </View>
      );
    }
    // VISITEE MODE, HIDE EMERGENCY BUTTON
    else if (appState == "call" && userMode == true) {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress.contacts}><FontAwesomeIcon icon={faLongArrowAltLeft} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity></TouchableOpacity>
        </View>
      );
    }
    else if (appState == "emergency") {
      return (
        <View style={[styles.titleBar, styleExtra.title]}>
          <TouchableOpacity onPress={onPress.contacts}><FontAwesomeIcon icon={faLongArrowAltLeft} color={colorMode} /></TouchableOpacity>
          <Text style={[styles.title, styleExtra.title]}>RANIA Remote</Text>
          <TouchableOpacity><FontAwesomeIcon /></TouchableOpacity>
        </View>
      );
    }
  }

  // PRIMARY APP COMPONENT:
  // This is the primary entry point to the application and is where parent states are created, then passed down to child components.
  // This includes states such as the current user mode of the app, the current app page to be displayed, as well as the contacts list and settings.

  const App = () => {

    const [userMode, setUserMode] = useState(1);                          // 0 = visitor
    const [currentScreen, setCurrentScreen] = useState("call");           // which app screen is open?  settings, contacts, call
    // const [activeCall, setActiveCall] = useState(null);                // is there an active call? (may not be used)
    const [highVisFonts, setHighVisFonts] = useState(false);              // toggle high visibility fonts

    const [contacts, setContacts] = useState(contactsData);
    const [newName, setNewName] = useState(null);
    const [oldName, setOldName] = useState(null);
    const [refresh, setRefresh] = useState(0);

    const [darkMode, setDarkMode] = useState(false);                       // high contrast dark mode ADA Compliant

    // BEGIN VARIABLE STYLING --------------------------------
    // DARK MODE COLOR SELECTORS, USING TERNARY OPS
    const colorsBG = darkMode ? '#181818' : '#ffffff';
    const colorsMono = darkMode ? '#ffffff' : '#000000';
    const colorsAccent = darkMode ? '#36B048' : '#257933';
    const colorsTitle = darkMode ? '#323232' : '#f0f0ea';
    const colorsBorder = darkMode ? '#323232' : '#f0f0ea';
    const colorsItemText = darkMode ? '#ffffff' : '#000000';
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
      settings: () => setCurrentScreen('settings'),
      call: () => setCurrentScreen('call'),
      emergency: () => setCurrentScreen('emergency')
    };

    const handleCallback = (childData) => {
      setContacts(childData);
    }

    const handleOnChangeEdit = (text) => {
      setNewName(text);
    }

    const cancelEdit = () => {
      setNewName(null);
    }

    const saveEdit = () => {
      if (newName == null) {
        cancelEdit();
      }
      else {
        addContact(newName);
        console.log(oldName);
        removeContact(oldName);
      }
    }

    const createContact = () => {
      const newName = ["New Contact"];
      const newContact = { title: "Z", data: newName };

      var contactsArr = contacts;
      contactsArr.push(newContact);
      console.log(contactsArr);
      setRefresh(!refresh);
      setContacts(contactsArr);
    }

    if (currentScreen == 'contacts') {
      return (
        <View style={[styles.container, styleExtra.accent]}>
          <View style={[styles.statusBar, styleExtra.title]} />
          <TitleBar colorMode={colorsAccent} styleExtra={styleExtra}
            appState={currentScreen} onPress={onPress} extraData={darkMode} newContactOnPress={createContact} />
          <ContactList onPressCall={onPress} setOldName={setOldName} styleExtra={styleExtra} parentCallback={handleCallback} contactOnChange={handleOnChangeEdit}
            cancelEditContact={cancelEdit} refresh={refresh} saveEditContact={saveEdit} contactsList={contacts} />
        </View>
      )
    }
    if (currentScreen == 'settings') {
      return (
        <View style={[styles.container, styleExtra.accent]}>
          <View style={[styles.statusBar, styleExtra.title]} />
          <TitleBar colorMode={colorsAccent} styleExtra={styleExtra}
            appState={currentScreen} onPress={onPress} extraData={darkMode} />
          <Settings userMode={userMode} styleExtra={styleExtra}
            setUserMode={() => setUserMode(!userMode)} darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)}
            highVisFonts={highVisFonts} setHighVisFonts={() => setHighVisFonts(!highVisFonts)}
          />
        </View>
      )
    }
    if (currentScreen == 'call') {
      return (
        <View style={[styles.container, styleExtra.accent]}>
          <View style={[styles.statusBar, styleExtra.title]} />
          <TitleBar colorMode={colorsAccent} styleExtra={styleExtra}
            appState={currentScreen} userMode={userMode} onPress={onPress} extraData={darkMode} />
          <Call userMode={userMode} styleExtra={styleExtra} />
        </View>
      )
    }
    if (currentScreen == 'emergency') {
      return (
        <View style={[styles.container, styleExtra.accent]}>
          <View style={[styles.statusBar, styleExtra.title]} />
          <TitleBar colorMode={colorsAccent} styleExtra={styleExtra}
            appState={currentScreen} onPress={onPress} extraData={darkMode} />
          <Emergency styleExtra={styleExtra} />
        </View>
      )
    }
  }

  // IF FONTS AREN'T LOADED, DISPLAY LOADING SCREEN
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
    // backgroundColor: 'red'
    // height: '00%'
  },
  title: {
    fontFamily: 'Merriweather_400Regular',
    color: "#257933",
    fontSize: 20
  },
  statusBar: {
    // backgroundColor: '#f0f0ea',
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