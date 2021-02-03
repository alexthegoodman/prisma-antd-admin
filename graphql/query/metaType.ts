import gql from "graphql-tag";

const MetaTypeFragments = {
  MetaType: gql`
    fragment MetaTypeFragment on MetaType {
      id
      name
    }
  `,
};

export const GET_METATYPE = gql`
  query getMetaType($id: ID) {
    findOneMetaType(where: { id: $id }) {
      ...MetaTypeFragment
    }
  }
  ${MetaTypeFragments.MetaType}
`;
