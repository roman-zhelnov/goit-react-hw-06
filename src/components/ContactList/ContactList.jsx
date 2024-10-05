import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterStr = useSelector(selectFilters);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().trim().includes(filterStr.toLowerCase().trim())
  );

  return (
    <ul className={s.contactList}>
      {filteredData.map((item) => (
        <Contact key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ContactList;
