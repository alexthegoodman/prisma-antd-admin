import gql from "graphql-tag";

const PostFragments = {
  Post: gql`
    fragment PostFragment on Post {
      id
      name
      content
      # parts {
      #   id
      #   name
      # }
      categories {
        id
        name
      }
      chapters {
        id
        name
        part {
          id
          name
        }
      }
    }
  `,
};

export const GET_POST = gql`
  query getPost($id: ID) {
    post(where: { id: $id }) {
      ...PostFragment
    }
  }
  ${PostFragments.Post}
`;

export const GET_POSTS = gql`
  query getPosts {
    posts {
      ...PostFragment
    }
  }
  ${PostFragments.Post}
`;
