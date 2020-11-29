import React, { useState, useRef, Component, forwardRef } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone, faPen, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { addContact, getContacts } from './Storage.js';

const Item = ({ item, itemSelected, onPress, style, showOptions, disableTouch, optionEdit, optionCall, styleExtra }) => {
    if (itemSelected == true) {
        return (
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
        )
    }
    else {
        return (
            <View style={[styles.container, styleExtra.mono]}>
                <View style={style}>
                    <View style={styles.itemContainer}>
                        <Text onPress={onPress} style={[styles.item, styleExtra.item]}>
                            {item}
                        </Text>
                    </View>
                </View>
            </View>

        )
    }
};

const EditItem = ({ item, styleExtra, style, showOptions, disableTouch, optionEdit, onChangeEdit, cancelEdit, saveEdit}) => (
    <View style={[styles.container, styleExtra.mono]}>
        <View style={style}>
            <View style={styles.itemContainer}>
                <TextInput autoFocus={true} onChangeText={onChangeEdit} editable={true} selectTextOnFocus={true} placeholder={item} style={styles.itemEdit} />
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={showOptions} disabled={!disableTouch} onPress={cancelEdit}>
                        <FontAwesomeIcon size={20} icon={faTimes} style={[styles.options, styleExtra.itemOptions]} />
                    </TouchableOpacity>
                    <TouchableOpacity style={showOptions} disabled={!disableTouch} onPress={saveEdit}>
                        <FontAwesomeIcon size={20} icon={faCheck} style={[styles.options, styleExtra.itemOptions]} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
);

const ContactList = ({ styleExtra, refresh, onPressCall, setOldName, contactsList, saveEditContact, cancelEditContact, contactOnChange, parentCallback }) => {
    const [selected, setSelected] = useState(null);
    const [editing, setEditing] = useState(null);

    // const focusRef = useRef(null);

    const cancelEdit_2 = () => {
        cancelEditContact();
        setEditing(null);
    }

    const saveEdit_2 = () => {
        setEditing(null);
        saveEditContact();
    }

    const renderItem = ({ item }) => {
        const background = item === selected ? styleExtra.itemSelect : styleExtra.mono;     // highlight color
        const opacity = item === selected ? 100 : 0;                                        // display expanded options yes/no
        const disabled = item === selected ? false : true;                                  // disable touchableopacity of options

        var isSelected = false;
        if (item === selected) {
            isSelected = true;
        }

        if (editing === item && isSelected) {
            setOldName(item);
            return (
                <EditItem
                    item={item}
                    styleExtra={styleExtra}
                    // onPress={() => setSelected(item)}
                    style={background}
                    showOptions={{ opacity }}
                    disableTouch={{ disabled }}
                    optionCall={onPressCall.call}
                    onChangeEdit={contactOnChange}
                    cancelEdit={cancelEdit_2}
                    saveEdit={saveEdit_2}
                    optionEdit={() => setEditing(null)}
                />
            );
        }
        else if (editing !== item || !isSelected) {
            return (
                <Item
                    item={item}
                    itemSelected={isSelected}
                    styleExtra={styleExtra}
                    onPress={() => { setSelected(item); setEditing(null) }}
                    style={background}
                    showOptions={{ opacity }}
                    disableTouch={{ disabled }}
                    optionCall={onPressCall.call}
                    optionEdit={() => { setEditing(item); () => focusRef.current.focus() }}
                />
            );
        }
    };
    return (
        <View>
            <Text style={[styles.listHeader, styleExtra.mono]}>― Contact List ―</Text>
            <View style={styles.listBox}>
                <SectionList sections={contactsList}
                    renderItem={renderItem}
                    renderSectionHeader={({ section }) => <Text style={[styles.sectionHeader, styleExtra.title]}>{section.title}</Text>}
                    keyExtractor={(item) => item}
                    extraData={refresh} />
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
        fontFamily: 'Merriweather_400Regular',
        fontWeight: 'bold',
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
        fontFamily: 'Merriweather_400Regular',
        fontWeight: 'bold',
        backgroundColor: '#f0f0ea',
        color: 'black'
    },
    item: {
        // flex: 1,
        padding: 10,
        fontSize: 18,
        height: 44,
        fontFamily: 'Merriweather_400Regular'

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
        paddingHorizontal: 18,
        alignSelf: "flex-end",
        // zIndex: 1
        // flexWrap: 'wrap'
    }
})

export { ContactList };