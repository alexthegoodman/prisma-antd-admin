import gql from "graphql-tag";

const ItemTypeFragments = {
  ItemType: gql`
    fragment ItemTypeFragment on ItemType {
      id
      name
      content
    }
  `,
};

export const GET_ITEMTYPE = gql`
  query getItemType($id: ID) {
    findOneItemType(where: { id: $id }) {
      ...ItemTypeFragment
    }
  }
  ${ItemTypeFragments.ItemType}
`;

export const GET_ITEMTYPES = gql`
  query getItemTypes {
    findManyItemType {
      ...ItemTypeFragment
    }
  }
  ${ItemTypeFragments.ItemType}
`;
