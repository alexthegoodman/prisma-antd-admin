export interface PrimaryFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  objectName: string;
  initialValues?: any;
  onSubmit: any;
}
