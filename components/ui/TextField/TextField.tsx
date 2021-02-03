import * as React from "react";

import { TextFieldProps } from "./TextField.d";
import { Field, FieldProps } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { Input } from "antd";

const TextField: React.FC<TextFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "",
  fieldType = "text",
}) => {
  // const clickHandler = e => onClick(e);
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => (
        <>
          <Input 
            id={fieldName}
            addonBefore={label}
            addonAfter={helperText}
            className={className}
            size="large" 
            placeholder={fieldPlaceholder} 
            type={fieldType}
          />
          {form.touched[fieldName] && form.errors[fieldName] ? (
            <ValidationNotice error={form.errors[fieldName] as string} />
          ) : (
            <></>
          )}
        </>
        // <FormGroup
        //   helperText={helperText}
        //   label={label}
        //   labelFor={fieldName}
        //   labelInfo={fieldInfo}
        // >
        //   <InputGroup
        //     id={fieldName}
        //     className={className}
        //     placeholder={fieldPlaceholder}
        //     type={fieldType}
        //     {...field}
        //   />
        // </FormGroup>
      )}
    />
  );
};

export default TextField;
