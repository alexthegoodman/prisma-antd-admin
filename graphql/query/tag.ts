import gql from "graphql-tag";

const TagFragments = {
  Tag: gql`
    fragment TagFragment on Tag {
      id
      name
    }
  `,
};

export const GET_TAG = gql`
  query getTag($id: ID) {
    findOneTag(where: { id: $id }) {
      ...TagFragment
    }
  }
  ${TagFragments.Tag}
`;
