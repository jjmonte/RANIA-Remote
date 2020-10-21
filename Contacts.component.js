import React, { useState, useEffect, Component, Map } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone, faPen } from '@fortawesome/free-solid-svg-icons';

import MyText from './App';

// import * as GLOBAL from './global';

class Item extends Component {

    state = {
        selected: false,
        contact: null,
    }

    selectStyle = function(contact) {
        if (this.state.selected == true) {
            return {
                backgroundColor: '#C8F5FF'
            }
        }
        else return {
            backgroundColor: 'white'
        }  
    }

    onPress = (contact) => {
        if (this.state.selected == false) {
            this.setState({
                selected: true,
            })
        }
        else {
            this.setState({
            selected: false
        })}
    }

    render() {
        return(
            <View>
                <TouchableOpacity onPress={this.onPress} style={this.selectStyle()}>
                    <Text style={styles.item}>{this.props.children}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
    


export class ContactList extends Component {
    state = {
        selection: false
    }

    render() {
        return (
            <View>
                <Text style={styles.listHeader}>― Contact List ―</Text>
                <View style={styles.listBox}>
                    <SectionList sections={[ {title: 'A', data: ['Aaron', 'Amy']}, {title: 'J', data: ['Jade', 'Jared']} ]} renderItem={({item}) => <Item>{item}</Item>} 
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => item + index} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listHeader: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Merriweather_700Bold',
        padding: 10
    },
    listBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontFamily: 'Merriweather_700Bold',
        backgroundColor: '#f0f0ea',
        color: 'black'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Merriweather_400Regular',
        color: "#257933",
        borderBottomWidth: 1,
        borderColor: '#f0f0ea',
        
        
    },
    select: {

    }
  })

  export default ContactList;