import gql from "graphql-tag";

const FavoriteFragments = {
  Favorite: gql`
    fragment FavoriteFragment on Favorite {
      id
      name
    }
  `,
};

export const GET_FAVORITE = gql`
  query getFavorite($id: ID) {
    findOneFavorite(where: { id: $id }) {
      ...FavoriteFragment
    }
  }
  ${FavoriteFragments.Favorite}
`;
