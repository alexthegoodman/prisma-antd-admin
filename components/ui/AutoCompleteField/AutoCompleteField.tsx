import * as React from "react";

import { AutoCompleteFieldProps } from "./AutoCompleteField.d";

// import Autosuggest from "react-autosuggest";
import { Field, FieldProps } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { useQuery } from "react-apollo";
import Select from "react-select";
import { Typography } from "antd";

const { Text } = Typography;
// const { Option } = Select;

const AutoCompleteField: React.FC<AutoCompleteFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  query = null,
  queryOptions = {},
  variables = {},
  selector = "",
  valueSelector = "id",
  labelSelector = "name",
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "Select...",
  selectProps = {},
}) => {
  const clickHandler = (e) => onClick(e);

  const { data: listData, error: listError, loading: listLoading } = useQuery(
    query,
    {
      variables,
      ...queryOptions,
    }
  );

  if (listError) {
    return <Text>Error...</Text>;
  }

  if (listLoading) {
    return <Text>Loading...</Text>;
  }

  const options = [];

  listData[selector].forEach((item, i) => {
    options[options.length] = {
      value: item[valueSelector],
      label: item[labelSelector],
    };
  });

  console.info("options", listData, options);
  
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => {
        return (
          <>
            {JSON.stringify(options)}
            <Select 
              options={options} 
              {...selectProps} 
              {...field}
            />
            {form.touched[fieldName] && form.errors[fieldName] ? (
              <ValidationNotice error={form.errors[fieldName] as string} />
            ) : (
              <></>
            )}
          </>
        );
      }}
    />
  );
};

export default AutoCompleteField;

// Antd
{/* <Select
  // showSearch
  style={{ width: 200 }}
  onChange={field.onChange}
  // placeholder={fieldPlaceholder}
  // defaultValue={{ value: listData[selector][0][valueSelector] }}
  // {...field}
>
  {listData[selector].map((item, i) => {
    return <Option key={`option${field.name}${i}`} value={item[valueSelector]}>{item[labelSelector]}</Option>;
  })}
</Select> */}