export interface PrimaryButtonProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  label: string;
  linkTo?: string;
  antButtonProps?: any;
}
