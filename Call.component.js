import { faCircle, faEyeSlash, faGamepad, faHandshakeAltSlash, faHandshakeSlash, faMicrophoneSlash, faPhoneSlash, faSlash, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState, useRef, Component, forwardRef } from 'react';
import { Text, Dimensions, ScrollView, View, StyleSheet, TouchableOpacity, SectionList, Image } from 'react-native';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faPhone, faPen, faCheck, faOutdent, faPlusCircle, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';

// CALL COMPONENT:
//
// THIS COMPONENT IS A PLACEHOLDER/TEMPLATE FOR FUTURE WORK
// INCLUDING THE IMPLEMENTATION OF VISITOR->INTERNET->BLUETOOTH->HARDWARE CONTROLS
// FOR THE RANIA REMOTE'S ROBOTIC BASE
// 
// WHILE THIS COMPONENT WILL BE RENDERED, IT PROVIDES NO FUNCTIONALITY IN ITS CURRENT STATE
// THE 'CONTROLLER' ON THIS COMPONENT DOES NOT FUNCTION, IT IS ONLY A MOCKUP IMAGE
// 

// Helper code to calculate image width for mockup images
const window = Dimensions.get('window');
const ratio = window.width / 1200;

const Call = ({ userMode, styleExtra }) => {

    // DISPLAY IF VISITOR MODE
    if (userMode == false) {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>― Sam Rydzynski ―</Text>
                    </View>
                    <Image style={styles.visitor} source={require('./assets/visitee.jpg')}></Image>
                    <View style={styles.smallCallControls}>
                        <TouchableOpacity><FontAwesomeIcon size={25} style={styles.icon} color={styleExtra.accent.color} icon={faMicrophoneSlash} /></TouchableOpacity>
                        <TouchableOpacity><FontAwesomeIcon size={25} style={styles.icon} color={styleExtra.accent.color} icon={faVideoSlash} /></TouchableOpacity>
                        <TouchableOpacity><FontAwesomeIcon size={25} style={styles.icon} icon={faPhoneSlash} color={'#C54E3E'} /></TouchableOpacity>
                    </View>
                </View>
                <Image style={styles.controller} source={require('./assets/controller_mockup.png')}></Image>
            </View>
        )
    }

    // DISPLAY IF VISITEE MODE
    else {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>― Jade Montesano ―</Text>
                    </View>
                    <Image style={styles.visitor} source={require('./assets/visitor.png')}></Image>
                </View>
                <View style={styles.callControlsContainer}>
                    {/* CALL CONTROLS, ADD FUNCTIONALITY (DISABLE ROBOT, MUTE, DISABLE VIDEO, respectively) */}
                    <TouchableOpacity><FontAwesomeIcon size={40} style={styles.iconControl} color={styleExtra.accent.color} icon={faEyeSlash} /></TouchableOpacity>
                    <TouchableOpacity><FontAwesomeIcon size={40} style={styles.iconControl} color={styleExtra.accent.color} icon={faMicrophoneSlash} /></TouchableOpacity>
                    <TouchableOpacity><FontAwesomeIcon size={40} style={styles.iconControl} color={styleExtra.accent.color} icon={faVideoSlash} /></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.divider}>｜</Text></TouchableOpacity>
                    <TouchableOpacity><FontAwesomeIcon size={40} style={styles.iconControl} icon={faPhoneSlash} color={'#C54E3E'} /></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    visitor: {
        resizeMode: 'contain',
        width: '100%',
        height: window.height * .7,
        zIndex: -1
    },
    controller: {
        resizeMode: "cover",
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 745 * ratio,
        bottom: 0,
        backgroundColor: '#909090'
    },
    header: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Merriweather_400Regular',
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 10
    },
    headerContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    icon: {
        paddingHorizontal: 20
    },
    iconControl: {
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    divider: {
        fontSize: 50,
        // fontWeight: 'bold',
        // lineHeight: 50,
        paddingVertical: 15,
        color: '#282828'
    },
    callControlsContainer: {
        alignContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 0,
        width: '40%',
        position: 'absolute',
        backgroundColor: '#181818',
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#282828',
        marginBottom: 15
    }
});

export { Call };