import { gql } from "../../__generated__/gql";
export const GET_CHARACTERS = gql(/* GraphQL */ `
  query GetCharacters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`);

export const GET_CHARACTER = gql(/* GraphQL */ `
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
    }
  }
`);
