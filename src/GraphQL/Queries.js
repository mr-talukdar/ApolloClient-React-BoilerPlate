import { gql } from "@apollo/client";

export const LOAD_USERS=gql`
{
    postsAvailable {
      id
      title
      slug
    }
  }
`;