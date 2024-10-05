import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsDate from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContactsDate = window.localStorage.getItem("NewContacts");
    return savedContactsDate ? JSON.parse(savedContactsDate) : contactsDate;
  });

  const [filterContacts, setFilterContacts] = useState("");

  const handelDeleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("NewContacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterContacts} onFilter={setFilterContacts} />
      <ContactList contacts={visibleContacts} onDelete={handelDeleteContact} />
    </>
  );
}

export default App;
