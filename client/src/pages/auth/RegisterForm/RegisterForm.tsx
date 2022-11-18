import { Form, Formik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";
import TextField from "../TextField";

const RegisterForm = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .max(23, "Pasword must be up to 23 characters")
      .required("Password is required"),
  });

  const onSubmit = () => {};

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        onSubmit();
      }}
    >
      {(formik) => (
        <div className="form-container">
          <Form className="form-container__content">
            <div className="form-container__content--text-fields">
              <TextField pholder="e-mail" name="email" type="text" />
              <TextField pholder="password" type="password" name="password" />
              <TextField
                pholder="confirm password"
                type="password"
                name="confirm-password"
              />
            </div>
            <button
              type="submit"
              className="form-container__content--submit-btn"
            >
              Sign Up
            </button>
          </Form>

          {/* {successState && <Success message="E-mail sent!" />}
          {errorState && <Error message="Something went wrong" />} */}
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
