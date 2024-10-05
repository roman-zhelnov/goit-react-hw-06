import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ onDelete, contacts }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((item) => (
        <Contact key={item.id} {...item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
