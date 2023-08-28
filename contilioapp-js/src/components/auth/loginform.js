import React, { Component } from "react";
import { Formik, Form, FormikProps } from "formik";

class LoginForm extends Component {
  render() {
    const initialValues = { username: "", password: "" };
    const { login } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          login();
          actions.setSubmitting(false);
        }}
        validate={(values) => {
          let errors = {};
          if (
            !values.username ||
            (values.username && !values.username.trim())
          ) {
            errors.username = "You must enter a Username.";
          }
          if (
            !values.password ||
            (values.password && !values.password.trim())
          ) {
            errors.password = "You must enter a Password.";
          }
          return errors;
        }}
      >
        {(FormikProps) => {
          let disabled =
            (FormikProps.values &&
              (!FormikProps.values.username ||
                (FormikProps.values.username &&
                  !FormikProps.values.username.trim()))) ||
            !FormikProps.values.password ||
            (FormikProps.values.password &&
              !FormikProps.values.password.trim());

          return (
            <Form
              className="login"
              onSubmit={FormikProps.handleSubmit}
            >
              <div className="form">
                <h4 className="w-100">Login Form</h4>
                <p className="w-100">
                  Enter a username and password here to login
                </p>
                <div className="w-100 form-fields">
                  <div className="form-element">
                    <label className="w-50" htmlFor="username">Username</label>
                    <input
                      id="username"
                      name="username"
                      className={`input mt-2 ${
                        FormikProps.errors.username ? "input-error" : ""
                      }`}
                      placeholder="Enter a username"
                      onChange={FormikProps.handleChange}
                      onBlur={FormikProps.handleBlur}
                      value={FormikProps.values.username}
                    />
                    {FormikProps.errors.username &&
                      FormikProps.touched.username && (
                        <div className="form-error">
                          {FormikProps.errors.username}
                        </div>
                      )}
                  </div>
                  <div className="form-element">
                    <label className="w-100" htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      className={`input mt-2 ${
                        FormikProps.errors.password ? "input-error" : ""
                      }`}
                      placeholder="Enter a password"
                      onChange={FormikProps.handleChange}
                      onBlur={FormikProps.handleBlur}
                      value={FormikProps.values.password}
                    />
                    {FormikProps.errors.password &&
                      FormikProps.touched.password && (
                        <div className="form-error">
                          {FormikProps.errors.password}
                        </div>
                      )}
                  </div>
                </div>
                <div className="w-100 mt-3">
                  <button
                    type="submit"
                    className={`button-primary button ${disabled ? 'disabled' : ''}`}
                    disabled={disabled}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }
}
export default LoginForm;
