import * as React from "react";

import { LoginFormProps, LoginFormValues } from "./LoginForm.d";

import { Form, Formik, FormikActions, FormikProps } from "formik";
import { Link } from "react-navi";
import * as Yup from "yup";
import { useAppContext } from "../../../context";
import AuthClient from "../../../services/AuthClient";
import CheckboxField from "../CheckboxField/CheckboxField";
import SelectField from "../SelectField/SelectField";
import TextareaField from "../TextareaField/TextareaField";
import TextField from "../TextField/TextField";
import UploadField from "../UploadField/UploadField";
import { Alert, Button } from "antd";

const LoginForm: React.FC<LoginFormProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
}) => {
  const authClient = new AuthClient();

  const [{ userData }, dispatch] = useAppContext();
  const [userDoesNotExist, setUserDoesNotExist] = React.useState(false);
  const [tooManyLoginAttempts, setTooManyLoginAttempts] = React.useState(false);
  const [generalError, setGeneralError] = React.useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      {userDoesNotExist ? (
        <Alert 
          message="Please try another email and password combination." 
          type="warning" 
          showIcon 
          closable 
        />
      ) : (
        <></>
      )}

      {tooManyLoginAttempts ? (
          <Alert 
            message="Your account has been blocked after multiple consecutive login attempts." 
            type="warning" 
            showIcon 
            closable 
          />
      ) : (
        <></>
      )}

      {generalError ? (
        <Alert 
          message="There was an error logging in." 
          type="warning" 
          showIcon 
          closable 
        />
      ) : (
        <></>
      )}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(
          values: LoginFormValues,
          actions: FormikActions<LoginFormValues>
        ) => {
          console.log("values", { values, actions });

          // mixpanel.track("Log in form submission attempt", {
          //   env: process.env.NODE_ENV,
          //   time: new Date(),
          //   data: {
          //     values,
          //   },
          // });
        }}
        render={(formikBag: FormikProps<LoginFormValues>) => {
          return (
            <Form>
              <TextField
                label=""
                fieldName="email"
                fieldPlaceholder="Email"
                fieldType="email"
              />
              <TextField
                label=""
                fieldName="password"
                fieldPlaceholder="Password"
                fieldType="password"
              />
              <Button
                // type="submit"
                className="button loginButton"
                disabled={formikBag.isSubmitting}
                loading={formikBag.isSubmitting}
              >
                Login
              </Button>
            </Form>
          );
        }}
      />
    </>
  );
};

export default LoginForm;
