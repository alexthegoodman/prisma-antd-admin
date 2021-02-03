import gql from "graphql-tag";

export const GET_SCHEMA = gql`
  query schemaObjects {
    __schema {
      types {
        name
        description
        kind
      }
    }
  }
`;