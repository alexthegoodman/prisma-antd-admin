import * as React from "react";
import { Link } from "react-navi";
import { GET_SCHEMA } from "../../../graphql/query/schema";
import PrimaryContainer from "../../layout/PrimaryContainer/PrimaryContainer";

import PrimaryTable from "../../ui/PrimaryTable/PrimaryTable";

import { ObjectListProps } from "./ObjectList.d";


const ObjectList: React.FC<ObjectListProps> = () => {
  const query = GET_SCHEMA;
  const dataSelector = ["__schema", "types"];
  const itemFilter = [{ prop: "kind", value: "OBJECT" }];
  const tableProps = {
    columns: [
      {
        name: "Name",
        selector: "name",
        cell: ({ name }, index, column, id) => {
          return <Link href={`/admin/detail/${name.toLowerCase()}`}>{name}</Link>
        }
      },
      {
        name: "Description",
        selector: "description"
      }
    ],
  };

  return (
    <PrimaryContainer title={"Object List"}>
        <PrimaryTable
          query={query}
          dataSelector={dataSelector}
          tableProps={tableProps}
          itemFilter={itemFilter}
        />
    </PrimaryContainer>        
  );
};

export default ObjectList;
