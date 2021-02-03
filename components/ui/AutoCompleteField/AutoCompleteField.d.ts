export interface AutoCompleteFieldProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  query: any;
  queryOptions?: any;
  variables?: any;
  selector: string;
  helperText?: string;
  label?: string;
  fieldName: string;
  fieldInfo?: string;
  fieldPlaceholder?: string;
  fieldType?: string;
  selectProps?: any;
  valueSelector?: string;
  labelSelector?: string;
}
