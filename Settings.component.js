import React, { useState, useRef, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const Settings = ({ styleExtra, userMode, setUserMode, darkMode, setDarkMode }) => {

    // const [darkEnabled, setDarkEnabled] = useState(false);
    const [fontsEnabled, setFontsEnabled] = useState(false);

    // const toggleDark = () => setDarkEnabled(previousState => !previousState);
    const toggleFonts = () => {
        setFontsEnabled(previousState => !previousState);
    }

    const userModeLabel = userMode ? 'Visitee' : 'Visitor';

    return (
        <View styles={[styles.container, styleExtra]}>
            <Text style={[styles.header, styleExtra.mono]}>― Settings ―</Text>
            <View>
                <View style={[styles.setting, styleExtra.accent]}>
                    <Text style={[styles.label, styleExtra.mono]}>User Mode: {userModeLabel}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f0f0ea" }}
                        thumbColor={userMode ? "#257933" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setUserMode}
                        value={userMode}
                    />
                </View>
                <View style={[styles.setting, styleExtra.accent]}>
                    <Text style={[styles.label, styleExtra.mono]}>High Contrast (Dark) Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f0f0ea" }}
                        thumbColor={darkMode ? "#36B048" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setDarkMode}
                        value={darkMode}
                    />
                </View>
                <View style={[styles.setting, styleExtra.accent]}>
                    <Text style={[styles.label, styleExtra.mono]}>Improve Text Readability</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f0f0ea" }}
                        thumbColor={fontsEnabled ? "#257933" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleFonts}
                        value={fontsEnabled}
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
        fontFamily: 'Merriweather_700Bold',
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