import React, { useState, useRef, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';

// EMERGENCY COMPONENT:
//
// Upon pressing the Emergency button (on the title bar, during a call, when a visitor), this screen is displayed.
// This component is non-functional, but provides a button for which later functionality could be added.
//
// Example use case:
// You are calling an elderly family member (a RANIA user), who suffers a fall during your chat.
// Rather than call 911, instead you can press the 'Emergency' button, which will instead call the nearest caregiver,
// local paramedics, or other emergency personnel. 
//
// Additionally, this function could interact with other RANIA functions, such as included fall detection. 
// It can act as a double-check, in case one system fails.
// This function could also provide a means of calling an emergency for non-fall/drowning/heart related injuries

const Emergency = ({ styleExtra }) => {

    return (
        <View style={[styles.container, styleExtra]}>
            <Text style={[styles.header, styleExtra.mono]}>― Emergency ―</Text>
            <View>
                <Text style={[styles.body, styleExtra.mono]}>
                    Is the person you're calling in danger?
                </Text>
                {/* EMERGENCY BUTTON, ADD FUNCTIONALITY HERE */}
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>YES, CALL EMERGENCY PERSONNEL</Text></TouchableOpacity>
                <Text style={[styles.note, styleExtra.mono]}>
                    <Text style={{ fontWeight: "bold" }}>Note: </Text>The above button will alert the RANIA system of an emergency and call upon the proper personnel.{'\n'}{'\n'}
                    Calling emergency numbers under false contexts could result in criminal penalties.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1
    },
    header: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Merriweather_400Regular',
        fontWeight: 'bold',
        color: '#000000',
        padding: 10
    },
    body: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'HelveticaNeue',
        color: '#000000',
        padding: 25
    },
    button: {
        backgroundColor: '#C54E3E',
        width: '55%',
        alignSelf: 'center',
        justifyContent: 'center',
        // flex: 1,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 15
    },
    note: {
        // alignSelf: 'cente',
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        color: '#000000',
        paddingVertical: 30,
        paddingHorizontal: '20%',
        lineHeight: 25
    }

});

export { Emergency };