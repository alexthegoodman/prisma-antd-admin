import gql from "graphql-tag";

const CategoryFragments = {
  Category: gql`
    fragment CategoryFragment on Category {
      id
      name
    }
  `,
};

export const GET_CATEGORY = gql`
  query getCategory($id: ID) {
    findOneCategory(where: { id: $id }) {
      ...CategoryFragment
    }
  }
  ${CategoryFragments.Category}
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      ...CategoryFragment
    }
  }
  ${CategoryFragments.Category}
`;