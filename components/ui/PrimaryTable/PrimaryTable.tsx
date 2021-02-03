import * as React from "react";

import { PrimaryTableProps } from "./PrimaryTable.d";

import DataTable, { createTheme } from "react-data-table-component";
// import { GET_ORGANIZATIONS } from "../../../graphql/query/organization";
import { useQuery } from "react-apollo";
import { Typography } from "antd";

const { Text } = Typography;

const PrimaryTable: React.FC<PrimaryTableProps> = ({
  query = null,
  pageSize = 10,
  tableProps = {},
  queryOptions = {},
  dataSelector = "",
  itemFilter = null
}) => {
  const [page, setPage] = React.useState(null);
  const [variables, setVariables] = React.useState(null);

  const {
    data: tableData,
    error: tableError,
    loading: tableLoading,
  } = useQuery(query, {
    variables,
    ...queryOptions,
  });

  if (tableError) {
    return <Text>Error...</Text>;
  }

  if (tableLoading) {
    return <Text>Loading...</Text>;
  }

  const getTargetData = (targetData) => {
    dataSelector.forEach((i) => targetData = targetData[i]); 
    return targetData;
  }

  const filterItems = (targetData) => {
    let newData = [];
    targetData.forEach((item) => {
      itemFilter.forEach((filter) => {
        if (item[filter.prop] === filter.value) {
          newData[newData.length] = item;
        }
      });
    });
    return newData;
  }

  let data = Array.isArray(dataSelector) ? getTargetData(tableData) : tableData[dataSelector];
  data = itemFilter !== null ? filterItems(data) : data;

  console.info("table data", data, tableData, tableError, tableLoading);

  return (
    <DataTable 
      data={data}
      {...tableProps}
    />
  );
};

export default PrimaryTable;
