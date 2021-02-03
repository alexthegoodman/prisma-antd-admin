import gql from "graphql-tag";

const UserFragments = {
  User: gql`
    fragment UserFragment on User {
      id
      email
    }
  `,
};

export const GET_USER = gql`
  query getUser($id: ID) {
    user(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${UserFragments.User}
`;

export const GET_USERS = gql`
  query getUsers {
    users {
      ...UserFragment
    }
  }
  ${UserFragments.User}
`;
