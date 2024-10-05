import s from "./Contact.module.css";
import { TbPhone } from "react-icons/tb";
import { FaUserLarge } from "react-icons/fa6";

const Contact = ({ id, name, number, onDelete }) => {
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
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
