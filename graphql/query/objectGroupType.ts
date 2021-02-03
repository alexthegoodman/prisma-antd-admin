import gql from "graphql-tag";

const ObjectGroupTypeFragments = {
  ObjectGroupType: gql`
    fragment ObjectGroupTypeFragment on ObjectGroupType {
      id
      name
    }
  `,
};

export const GET_OBJECTGROUPTYPE = gql`
  query getObjectGroupType($id: ID) {
    findOneObjectGroupType(where: { id: $id }) {
      ...ObjectGroupTypeFragment
    }
  }
  ${ObjectGroupTypeFragments.ObjectGroupType}
`;

export const GET_OBJECTGROUPTYPES = gql`
  query getObjectGroupTypes {
    findManyObjectGroupType {
      ...ObjectGroupTypeFragment
    }
  }
  ${ObjectGroupTypeFragments.ObjectGroupType}
`;
