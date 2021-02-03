import * as React from "react";

import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { LoginFormValues, LoginProps } from "./Login.d";

import LoginForm from "../../ui/LoginForm/LoginForm";
import PrimaryContainer from "../../layout/PrimaryContainer/PrimaryContainer";

const Login: React.FC<LoginProps> = () => {
  return (
    <PrimaryContainer title="Login"><LoginForm /></PrimaryContainer>
  );
};

export default Login;
