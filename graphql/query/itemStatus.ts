import gql from "graphql-tag";

const ItemStatusFragments = {
  ItemStatus: gql`
    fragment ItemStatusFragment on ItemStatus {
      id
      name
    }
  `,
};

export const GET_ITEMSTATUS = gql`
  query getItemStatus($id: ID) {
    findOneItemStatus(where: { id: $id }) {
      ...ItemStatusFragment
    }
  }
  ${ItemStatusFragments.ItemStatus}
`;

export const GET_ITEMSTATUSES = gql`
  query getItemStatuses {
    findManyItemStatus {
      ...ItemStatusFragment
    }
  }
  ${ItemStatusFragments.ItemStatus}
`;
