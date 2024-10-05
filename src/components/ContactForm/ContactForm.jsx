import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const numberReg = /^(\d[-\d]*){3,}$/;
  const nameReg = /^[a-zA-Z]+$/;

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "At least 3 characters")
      .max(50, "No more than 50 characters")
      .matches(nameReg, "Incorrect name")
      .required(),
    number: Yup.string()
      .min(3, "At least 3 characters")
      .max(50, "No more than 50 characters")
      .matches(numberReg, "Incorrect phone number")
      .required(),
  });

  const handleSubmit = (values, options) => {
    const addContact = { ...values, id: nanoid() };
    onAdd(addContact);
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" className={s.input} />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
