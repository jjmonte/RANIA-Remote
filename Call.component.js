import React, { useState, useRef, Component, forwardRef } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SectionList, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone, faPen, faCheck, faOutdent, faPlusCircle, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';

// THIS COMPONENT IS A PLACEHOLDER/TEMPLATE FOR FUTURE WORK
// INCLUDING THE IMPLEMENTATION OF REMOTE->BLUETOOTH->HARDWARE CONTROLS
// FOR THE RANIA REMOTE'S ROBOTIC BASE
// 
// WHILE THIS COMPONENT WILL BE RENDERED, IT PROVIDES NO FUNCTIONALITY IN ITS CURRENT STATE

const Call = ({styleExtra}) => {
    return (
        <View styles={[styles.container, styleExtra]}>
            <Text style={[styles.header, styleExtra.mono]}>― {contactName} ―</Text>
            <View>
                <Image source={"./assetts/visitee.jpg"}></Image>

            </View>
        </View>
    )
}