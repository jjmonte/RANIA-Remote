import React, { useState, useRef, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';

// SETTINGS COMPONENT:
//
// This component displays the settings page, which allows for toggling of (currently) 3 user settings:
// User Mode (are you a visitor or visitee), 
// Dark/High Contrast Mode (for those with certain color contrast needs or preferences),
// and High Visibility Fonts [Helvetica] (for the elderly or those with dyslexia, who may have difficulty reading the Merriweather serif font)

const Settings = ({ styleExtra, userMode, setUserMode, darkMode, setDarkMode, highVisFonts, setHighVisFonts }) => {

    const userModeLabel = userMode ? 'Visitee' : 'Visitor';

    return (
        <View styles={[styles.container, styleExtra]}>
            <Text style={[styles.header, styleExtra.mono]}>― Settings ―</Text>
            <View>
                <View style={[styles.setting, styleExtra.accent]}>
                    <Text style={[styles.label, styleExtra.mono]}>User Mode: {userModeLabel}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f4f3f4" }}
                        thumbColor={userMode ? styleExtra.accent.color : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setUserMode}
                        value={userMode}
                    />
                </View>
                <View style={[styles.setting, styleExtra.accent]}>
                    <Text style={[styles.label, styleExtra.mono]}>High Contrast (Dark) Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f4f3f4" }}
                        thumbColor={darkMode ? styleExtra.accent.color : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setDarkMode}
                        value={darkMode}
                    />
                </View>
                <View style={[styles.setting, styleExtra.accent]}>
                    <Text style={[styles.label, styleExtra.mono]}>Improve Text Visibility</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f4f3f4" }}
                        thumbColor={highVisFonts ? styleExtra.accent.color : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setHighVisFonts}
                        value={highVisFonts}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#f0f0ea'
    },
    header: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Merriweather_400Regular',
        fontWeight: 'bold',
        color: '#000000',
        padding: 10
    },
    setting: {
        padding: 18,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        fontFamily: 'Merriweather_400Regular',
        flexDirection: 'row'
    },
    label: {
        fontFamily: '  Merriweather_400Regular',
        fontSize: 18,
        flex: 1
    }
});

export { Settings };