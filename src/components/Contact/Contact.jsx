import s from "./Contact.module.css";
import { TbPhone } from "react-icons/tb";
import { FaUserLarge } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/counter/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contact}>
      <div className={s.user}>
        <p>
          <FaUserLarge className={s.icon} />
          {name}
        </p>
        <p>
          <TbPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
