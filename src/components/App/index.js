// == Import npm
import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

// == Import
import './styles.css';

// == Composant
const App = () => {
  const onSubmit = (values) => {
    // Form is valid !
    console.log(values);
  };

  return (
    <div className="app">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field />
          <ErrorMessage />

          <Field />
          <ErrorMessage />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

// == Export
export default App;
