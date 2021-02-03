import * as React from "react";

import { PrimaryFormProps } from "./PrimaryForm.d";

import { Form, Formik, FormikProps } from "formik";
import { Link } from "react-navi";
import * as Yup from "yup";
import { useAppContext } from "../../../context";
import AuthClient from "../../../services/AuthClient";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";
import SelectField from "../../ui/SelectField/SelectField";
import TextareaField from "../../ui/TextareaField/TextareaField";
import TextField from "../../ui/TextField/TextField";
import UploadField from "../../ui/UploadField/UploadField";
import AutoCompleteField from "../AutoCompleteField/AutoCompleteField";
// import { GET_LOCATIONS } from "../../../graphql/query/location";
// import { GET_USERS } from "../../../graphql/query/user";
// import { GET_ITEMTYPES } from "../../../graphql/query/itemType";
// import { GET_ITEMSTATUSES } from "../../../graphql/query/itemStatus";
// import { GET_OBJECTGROUPS } from "../../../graphql/query/objectGroup";
// import { GET_OBJECTGROUPTYPES } from "../../../graphql/query/objectGroupType";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Alert, Space } from "antd";
import { GET_PARTS } from "../../../graphql/query/part";
import { GET_CHAPTERS } from "../../../graphql/query/chapter";
// import { GET_SCHEDULES } from "../../../graphql/query/schedule";
// import { GET_VENUES } from "../../../graphql/query/venue";
// import { GET_AMENITIES } from "../../../graphql/query/amenity";
// import { GET_DOWNLOADS } from "../../../graphql/query/download";
// import { GET_ACTIVITIES } from "../../../graphql/query/activity";

const PrimaryForm: React.FC<PrimaryFormProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  objectName = "",
  initialValues = {},
  onSubmit = (values) => console.info("submit", values),
}) => {
  const authClient = new AuthClient();

  const [{ userData }, dispatch] = useAppContext();
  const [generalError, setGeneralError] = React.useState(false);

  let schema = null;
  let baseInitialValues = {};
  let fields = <></>;
  switch (objectName) {
    case "post":
      schema = Yup.object().shape({
        name: Yup.string()
          .min(4, "Too Short!")
          .max(100, "Too Long!")
          .required("Required"),
      });
      baseInitialValues = {
        name: "",
        deleted: false,
      };
      fields = (
        <>
          <TextField 
            label="Name" 
            fieldName="name" 
            fieldType="text"
          />
          <TextareaField 
            label="Content" 
            fieldName="content"
          />
          <AutoCompleteField
            label="Part"
            fieldName="part"
            query={GET_PARTS}
            selector="parts"
            labelSelector="name"
            // selectProps={{ isMulti: true }}
          />
          {/* <AutoCompleteField
            label="Chapter"
            fieldName="chapter"
            query={GET_CHAPTERS}
            selector="chapters"
            labelSelector="name"
            // selectProps={{ isMulti: true }}
          /> */}
          <CheckboxField 
            label="Deleted" 
            fieldName="deleted"
          />
        </>
      );
      break;

    default:
      break;
  }

  return (
    <>
      {generalError ? (
        <Alert 
          message="There was an error." 
          type="warning" 
          showIcon 
          closable 
        />
      ) : (
        <></>
      )}

      <Formik
        initialValues={{ 
          ...baseInitialValues, 
          ...initialValues
        }}
        validationSchema={schema}
        onSubmit={(values: any, actions: any) => {
          console.log("values", { values, actions });

          // mixpanel.track("Log in form submission attempt", {
          //   env: process.env.NODE_ENV,
          //   time: new Date(),
          //   data: {
          //     values,
          //   },
          // });
        }}
        render={(formikBag: FormikProps<any>) => {
          return (
            <Form className="form">
              <Space direction="vertical">
                {fields}
                <PrimaryButton
                  // type="submit"
                  className="button loginButton"
                  label="Submit"
                  onClick={() => formikBag.submitForm()}
                  antButtonProps={{
                    disabled: formikBag.isSubmitting,
                    loading: formikBag.isSubmitting
                  }}
                />
              </Space>
            </Form>
          );
        }}
      />
    </>
  );
};

export default PrimaryForm;
