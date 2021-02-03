import gql from "graphql-tag";

const UserRoleFragments = {
  UserRole: gql`
    fragment UserRoleFragment on UserRole {
      id
      name
    }
  `,
};

export const GET_USERROLE = gql`
  query getUserRole($id: ID) {
    findOneUserRole(where: { id: $id }) {
      ...UserRoleFragment
    }
  }
  ${UserRoleFragments.UserRole}
`;
