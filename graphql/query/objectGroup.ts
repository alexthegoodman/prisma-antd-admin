import gql from "graphql-tag";

const ObjectGroupFragments = {
  ObjectGroup: gql`
    fragment ObjectGroupFragment on ObjectGroup {
      id
      name
    }
  `,
};

export const GET_OBJECTGROUP = gql`
  query getObjectGroup($id: ID) {
    findOneObjectGroup(where: { id: $id }) {
      ...ObjectGroupFragment
    }
  }
  ${ObjectGroupFragments.ObjectGroup}
`;

export const GET_OBJECTGROUPS = gql`
  query getObjectGroups {
    findManyObjectGroup {
      ...ObjectGroupFragment
    }
  }
  ${ObjectGroupFragments.ObjectGroup}
`;
