import React, { useState, useRef, Component, forwardRef } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone, faPen, faCheck, faOutdent, faPlusCircle, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import MyText from './App';

// import * as GLOBAL from './global';

const DATA = [
    {
        title: "E",
        data: ["Evan Lupfer"]
    },
    {
        title: "J",
        data: ["Jared Knouse", "Jade Montesano"]
    },
    {
        title: "N",
        data: ["Nate Durst"]
    },
    {
        title: "S",
        data: ["Sam Rydzynski"]
    }
];

const Item = ({ item, onPress, style, showOptions, disableTouch, optionEdit, optionCall, styleExtra }) => (
    <View style={[styles.container, styleExtra.mono]}>
        <View style={style}>
            <View style={styles.itemContainer}>
                <Text onPress={onPress} style={[styles.item, styleExtra.item]}>
                    {item}
                </Text>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={showOptions} disabled={!disableTouch} onPress={optionEdit}>
                        <FontAwesomeIcon size={20} icon={faPen} style={[styles.options, styleExtra.itemOptions]} />
                    </TouchableOpacity>

                    <TouchableOpacity style={showOptions} disabled={!disableTouch} onPress={optionCall}>
                        <FontAwesomeIcon size={20} icon={faPhone} style={[styles.options, styleExtra.itemOptions]} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>


    </View>
);

const EditItem = forwardRef(({item, styleExtra, onPress, style, showOptions, disableTouch, optionEdit, optionCall, ref }) => (
    <View style={styles.container}>
        <View style={style}>
            <View style={styles.itemContainer}>
                <TextInput ref={ref} autoFocus={true} editable={true} selectTextOnFocus={true} placeholder={item} style={styles.itemEdit} />
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={showOptions} disabled={!disableTouch} onPress={optionEdit}>
                        <FontAwesomeIcon size={20} icon={faCheck} style={[styles.options, styleExtra.itemOptions]} />
                    </TouchableOpacity>

                    <TouchableOpacity style={showOptions} disabled={!disableTouch} onPress={optionCall}>
                        <FontAwesomeIcon size={20} icon={faPhone} style={[styles.options, styleExtra.itemOptions]} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
));

const ContactList = ({styleExtra}) => {
    const [selected, setSelected] = useState(null);
    const [editing, setEditing] = useState(null);
    const focusRef = useRef(null);

    const renderItem = ({ item }) => {
        const background = item === selected ? styleExtra.itemSelect : styleExtra.mono;    // highlight color
        const opacity = item === selected ? 100 : 0;                        // display expanded options yes/no
        const disabled = item === selected ? false : true;                  // disable touchableopacity of options

        if (editing === item && item === selected) {
            return (
                <EditItem
                    ref={focusRef}
                    item={item}
                    styleExtra={styleExtra}
                    // onPress={() => setSelected(item)}
                    style={ background }
                    showOptions={{ opacity }}
                    disableTouch={{ disabled }}
                    optionEdit={() => setEditing(null)}/>
            );
        }
        else if (editing !== item || item !== selected) {
            return (
                <Item
                    item={item}
                    styleExtra={styleExtra}
                    onPress={() => {setSelected(item); setEditing(null)}}
                    style={ background }
                    showOptions={{ opacity }}
                    disableTouch={{ disabled }}
                    optionEdit={() => {setEditing(item); () => focusRef.current.focus()}}/>
            );
        }

    };
    
    return (
        <View>
            <Text style={[styles.listHeader, styleExtra.mono]}>― Contact List ―</Text>
            <View style={styles.listBox}>
                <SectionList sections={DATA}
                    renderItem={renderItem}
                    renderSectionHeader={({ section }) => <Text style={[styles.sectionHeader, styleExtra.title]}>{section.title}</Text>}
                    keyExtractor={(item) => item}
                    extraData={selected}/>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#f0f0ea'
    },
    itemContainer: {
        // flex: 1,
        flexDirection: 'row',

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
        // flex: 1,
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Merriweather_400Regular',
        color: "#257933",

    },
    itemEdit: {
        // flex: 1,
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Merriweather_400Regular',
        // color: "rgb(179, 179, 179)",
        backgroundColor: 'white'
    },
    optionsContainer: {
        flex: 1,
        // height: '100%',
        padding: 12,
        flexDirection: 'row',
        // float: 'right',
        justifyContent: "flex-end",
        // zIndex: 1
    },
    options: {
        // flex: 1,
        color: "#32a5f3",
        paddingHorizontal: 12,
        alignSelf: "flex-end",
        // zIndex: 1
        // flexWrap: 'wrap'
    }
})

export { ContactList };