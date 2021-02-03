export interface PrimaryTableProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  query: any;
  pageSize?: any;
  tableProps?: any;
  queryOptions?: any;
  dataSelector: any;
  itemFilter?: any;
}
