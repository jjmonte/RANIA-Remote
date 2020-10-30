import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone, faPen } from '@fortawesome/free-solid-svg-icons';

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

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
);

const ContactList = () => {
    const [selected, setSelected] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item === selected ? "#C8F5FF" : "white";

        return (
            <Item
              item={item}
              onPress={() => setSelected(item)}
              style={{ backgroundColor }}/>
        );
    };

    return (
        <View>
            <Text style={styles.listHeader}>― Contact List ―</Text>
            <View style={styles.listBox}>
                <SectionList sections={DATA}
                renderItem={renderItem} 
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item) => item}
                extraData={selected} />
            </View>
        </View>
      );
};


// export class ContactList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             selected: null,
//             setSelected: null
//         }
//     }

//     onPressAction = (item) => {
//         this.setState({setSelected: item})
//     };

    
//     selectStyle = (item) => {
//         // return backgroundColor = item === selected ? "#6e3b6e" : "#f9c2ff";
//         if (this.state.setSelected == item) {
//             return {
//                 backgroundColor: '#C8F5FF'
//             }
//         }
//         else return {
//             backgroundColor: 'white'
//         }  
//     };

//     renderItem = (item) => {
//         // backgroundColor = () => {
//         //     item === this.state.selected ? "#6e3b6e" : "#f9c2ff";
//         // }
//         return (
//             <Item
//               item={item}
//               onPress={() => setSelect(item)}
//               style={backgroundColor}>{item}</Item>
//         );
//     }

//     render() {
//         return (
            
//         )
//     }
// }

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

  export { ContactList };