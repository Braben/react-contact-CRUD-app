import { useState } from "react";
import "./App.css";
import ContactsForm from "./components/ContactsForm";
import Contacts from "./components/Contacts";
import { v4 as uuid } from "uuid"; //add uuid packages - yarn add uuid

function App() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Benjamin",
      email: "ben@mail.com",
      phoneNumber: "05439464245",
      location: "Accra",
      id: uuid(),
    },
    {
      fullName: "Benghamin",
      email: "benjjk@mail.com",
      phoneNumber: "05439464245",
      location: "East legon",
      id: uuid(),
    },
  ]);

  //function to add  a newContact
  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  // console.log(contacts);

  const editContact = (contactId, newContactDetails) => {
    let arr = contacts.map((contact) => {
      if (contact.id === contactId) {
        return newContactDetails;
      } else {
        return contact;
      }
    });
    setContacts(arr);
  };
  const deleteContact = (contactId) => {
    let filteredContacts = contacts.filter((contact) => {
      if (contact.id !== contactId) return contact;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="container">
      <Contacts
        editContact={editContact}
        deleteContact={deleteContact}
        contacts={contacts}
      />
      {/* passed new user a prop  */}
      <ContactsForm addContact={addNewContact} />
    </div>
  );
}
export default App;
