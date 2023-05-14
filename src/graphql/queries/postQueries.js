import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      slug
      createdAt
      publishedAt
      updatedAt

      datePublished
      coverPhoto {
        url
      }
      author {
        username
        avatar {
          url
        }
      }
    }
  }
`;

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      createdAt
      publishedAt
      updatedAt
      datePublished
      content {
        html
      }
      coverPhoto {
        url
      }
      author {
        username
        avatar {
          url
        }
      }
    }
  }
`;

export { GET_POSTS, GET_POST };
