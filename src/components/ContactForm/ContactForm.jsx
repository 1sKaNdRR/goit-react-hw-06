import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(30, "Too Long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short")
      .max(30, "Too Long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldID = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.inputWrap}>
          <label className={css.labelText}>Name</label>
          <Field className={css.fieldInput} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.errormsg} name="name" component="div" />
        </div>
        <div className={css.inputWrap}>
          <label className={css.labelText}>Number</label>
          <Field className={css.fieldInput} type="text" name="number" id={numberFieldID} />
          <ErrorMessage className={css.errormsg} name="number" component="div" />
        </div>
        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
