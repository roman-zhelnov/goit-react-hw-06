import s from "./Contact.module.css";
import { GiSmartphone } from "react-icons/gi";
import { SlUser } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contact}>
      <div className={s.user}>
        <p>
          <SlUser className={s.icon} />
          {name}
        </p>
        <p>
          <GiSmartphone className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
