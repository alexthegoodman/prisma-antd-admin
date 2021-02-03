import gql from "graphql-tag";

const ChapterFragments = {
  Chapter: gql`
    fragment ChapterFragment on Chapter {
      id
      name
      part {
        id
        name
      }
    }
  `,
};

export const GET_CHAPTER = gql`
  query getChapter($id: ID) {
    chapter(where: { id: $id }) {
      ...ChapterFragment
    }
  }
  ${ChapterFragments.Chapter}
`;

export const GET_CHAPTERS = gql`
  query getChapters {
    chapters {
      ...ChapterFragment
    }
  }
  ${ChapterFragments.Chapter}
`;
