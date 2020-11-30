// import AsyncStorage from '@react-native-async-storage/async-storage';

// POTENTIAL ASYNCHRONOUS, LOCAL STORAGE OF USER SETTINGS + CONTACTS, CURRENTLY NON-FUNCTIONAL AND UNUSED

// const getContacts = async () => {
//     try {
//         var contacts = await AsyncStorage.getItem('contacts')
//         .then( (value) => {
//             if (value == null) {
//                 addContact('New Contact');
//             } else {
//                 return JSON.parse(contacts);
//             }
//         });

//         // return contacts != null ? JSON.parse(contacts) : null;
//     }
//     catch (error) {
//         console.log('Error getting contact list via asyncstorage. Error: ' + error);
//         return null;
//     }
// }

// const addContact = async (contactName) => {
    
//     const toAdd = { 'title': contactName.toString().charAt(0).toUpperCase(), 'data': contactName };
    
//     // check if contacts in local storage, 
//     // if none, create empty array
//     // push new contact
//     let newContact = null;
//     try {
//         newContact = JSON.parse(getContacts);
//     } catch(error) {
//         newContact = [];
//     }
//     newContact.push(toAdd);

//     // if (!newContact) {
//     //     newContact = [];
//     // }

//     try {
//         await AsyncStorage.setItem('contacts', JSON.stringify(newContact));
//     } catch(error) {
//         console.log('Error saving new contact.');
//     }

//     console.log('New contact saved successfully to local storage.');
// }

export { addContact, getContacts };