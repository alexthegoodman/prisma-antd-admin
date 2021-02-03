import * as React from "react";

import { TextareaFieldProps } from "./TextareaField.d";
import { FieldProps, Field } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { Input } from "antd";

const { TextArea } = Input;

const TextareaField: React.FC<TextareaFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "",
}) => {
  // const clickHandler = e => onClick(e);
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => (
        <>
          <TextArea 
            id={fieldName}
            // rows={4} 
            // addonBefore={label}
            // addonAfter={helperText}
            autoSize={{ minRows: 3, maxRows: 5 }}
            className={className}
            placeholder={fieldPlaceholder}
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
        //   <TextArea
        //     id={fieldName}
        //     className={className}
        //     growVertically={true}
        //     large={true}
        //     placeholder={fieldPlaceholder}
        //     // intent={Intent.PRIMARY}
        //     // onChange={this.handleChange}
        //     // value={this.state.value}
        //     {...field}
        //   />
        // </FormGroup>
      )}
    />
  );
};

export default TextareaField;
