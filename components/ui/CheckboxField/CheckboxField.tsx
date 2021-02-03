import * as React from "react";

import { Field, FieldProps } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { CheckboxFieldProps } from "./CheckboxField.d";
import { Checkbox } from "antd";

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "",
}) => {
  // const clickHandler = e => onClick(e);
  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const handleEnabledChange = enabled => {
  //   console.info(enabled);
  //   setIsEnabled(enabled);
  // };
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => (
        <>
          <Checkbox
            id={fieldName}
            className={className}
            {...field}
          >
            {label}
          </Checkbox>
          {form.touched[fieldName] && form.errors[fieldName] ? (
            <ValidationNotice error={form.errors[fieldName] as string} />
          ) : (
            <></>
          )}
        </>
      )}
    />
  );
};

export default CheckboxField;
