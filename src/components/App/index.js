/* eslint-disable jsx-a11y/label-has-associated-control */

// import NPM
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Formik, Form, Field, ErrorMessage } from 'formik';

// import styles
import './styles.css';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Please email is required';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Sorry, invalid email address format';
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Password is required';
  }
  else if (value.length < 8) {
    error = 'Password must be 8 characters at minimum';
  }
  return error;
}

const App = () => {
  const onSubmit = (values) => {
    // Log the object values if form is valid
    console.log(values);
  };

  return (
    <div className="container">
      <h1 className="title">Login form</h1>
      <h2 className="subtitle">with Formik</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                placeholder="Enter your email"
                className={`form_control ${
                  touched.email && errors.email ? 'is-invalid' : ''
                }`}
                validate={validateEmail}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="invalid_feedback"
              />
            </div>

            <div className="form_group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className={`form_control ${
                  touched.password && errors.password ? 'is-invalid' : ''
                }`}
                validate={validatePassword}
              />
              <ErrorMessage
                component="div"
                name="password"
                className="invalid_feedback"
              />
            </div>

            <button className="btn" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
