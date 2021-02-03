import * as React from "react";

import { ObjectDetailProps } from "./ObjectDetail.d";
import PrimaryContainer from "../../layout/PrimaryContainer/PrimaryContainer";
import PrimaryTable from "../../ui/PrimaryTable/PrimaryTable";
import { useNavigation } from "react-navi";
import { GET_USERS } from "../../../graphql/query/user";
import { GET_POSTS } from "../../../graphql/query/post";
import { Button } from "antd";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";

const ObjectDetail: React.FC<ObjectDetailProps> = ({ objectName = null }) => {
  const navigation = useNavigation();

  let query = null;
  let dataSelector = "";
  let tableProps = {};

  switch (objectName) {
    case "user":
      query = GET_USERS;
      dataSelector = "users";
      tableProps = {
        columns: [
          {
            name: "ID",
            selector: "id",
          },
          {
            name: "Email",
            selector: "email",
          },
        ],
      };
      break;

      case "post":
        query = GET_POSTS;
        dataSelector = "posts";
        tableProps = {
          columns: [
            // {
            //   name: "ID",
            //   selector: "id",
            // },
            {
              name: "Name",
              selector: "name",
            },
            // {
            //   name: "Part",
            //   selector: "parts",
            //   cell: (row, index, column, id) => {
            //     return <>{row.parts[0].name}</>
            //   }
            // },
            // {
            //   name: "Category",
            //   selector: "categories",
            //   cell: (row, index, column, id) => {
            //     return <>{row.categories[0].name}</>
            //   }
            // },
            {
              name: "Chapter",
              selector: "chapters",
              cell: (row, index, column, id) => {
                return <>{row.chapters[0].name}</>
              }
            }
          ],
        };
        break;

    default:
      break;
  }

  return (
    <PrimaryContainer title={`${objectName} List`}>
      <PrimaryButton 
        label={`Add ${objectName}`} 
        linkTo={`/admin/new/${objectName}`}
      />
      <PrimaryTable
        query={query}
        dataSelector={dataSelector}
        tableProps={tableProps}
      />
    </PrimaryContainer>
  );
};

export default ObjectDetail;
