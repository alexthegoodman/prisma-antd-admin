import gql from "graphql-tag";

const PartFragments = {
  Part: gql`
    fragment PartFragment on Part {
      id
      name
      chapters {
        id
        name
      }
    }
  `,
};

export const GET_PART = gql`
  query getPart($id: ID) {
    part(where: { id: $id }) {
      ...PartFragment
    }
  }
  ${PartFragments.Part}
`;

export const GET_PARTS = gql`
  query getParts {
    parts {
      ...PartFragment
    }
  }
  ${PartFragments.Part}
`;
