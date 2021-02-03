export interface LoginFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface LoginFormValues {
  email: string;
  password: string;
  // confirmPassword: string;
  // agreeTerms: boolean;
}
