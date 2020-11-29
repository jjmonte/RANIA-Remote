// THIS FILE IS A BIT MESSY AND INEFFICIENT,
// IT WAS MADE VERY QUICKLY AND WITH NOT MUCH  P L A N N I N G
//
// THANK YOU, GOODNIGHT!

var contactsData = [
    {
        title: 'E',
        data: ["Evan Lupfer"]
    },
    {
        title: 'J',
        data: ["Jared Knouse", "Jade Montesano"]
    },
    {
        title: 'N',
        data: ["Nate Durst"]
    },
    {
        title: 'S',
        data: ["Sam Rydzynski"]
    }
];

const addContact = (newName) => {
    
    const section = newName.charAt(0).toUpperCase();
    const index = contactsData.findIndex(x => x.title === section);
    const toAdd = [newName];

    if (index == -1) {
        contactsData.push({ title: section, data: toAdd });
        console.log('index was -1\n');
        contactsData.sort((a, b) => (a.title > b.title) ? 1 : -1);
    }
    else {
        contactsData[index].data.push(newName);
        contactsData[index].data.sort();
    }
    console.log('Contact successfully added to array.\n');
    return console.log(contactsData);
}

const removeContact = (contactName) => {
    const section = contactName.charAt(0).toUpperCase();
    var sectionIndex = contactsData.findIndex(x => x.title === section);
    var isNew = null;

    if (contactName == "New Contact") {
        isNew = true;
        sectionIndex = contactsData.findIndex(x => x.title == "Z");
    }

    // IF THERE IS NO ALPHABETIZED SECTION CONTAINING THIS CONTACT
    // AND IT IS NOT A 'NEW CONTACT' (UNDER SECTION Z)
    // THEN IT DOES NOT EXIST
    if (sectionIndex == -1 && isNew == false) {
        console.log("Error: Contact not found.");
    }
    else {
        // IF THERE IS MORE THAN 1 ITEM UNDER THIS SECTION
        if (contactsData[sectionIndex].data.length > 1) {
            const itemIndex = contactsData[sectionIndex].data.findIndex(x => x == contactName);
            // IF THE CONTACT IS THE LAST ITEM IN THE ARRAY, POP IT
            if (itemIndex == contactsData[sectionIndex].data.length - 1) {
                return contactsData[sectionIndex].data.pop();
            }
            // ELSE, IF THE CONTACT IS SOMEWHERE IN BETWEEN, REMOVE IT ('SPLICE' IT OUT OF THE ARRAY)
            else {
                return contactsData[sectionIndex].data.splice(itemIndex, 1);
            }
        }
        // ELSE, IF THERE IS ONLY 1 ITEM UNDER THIS SECTION, REMOVE IT + THE SECTION
        else {
            contactsData[sectionIndex].data.pop();
            return contactsData.splice(sectionIndex, 1);
        }
    }
}

export { contactsData, addContact, removeContact };