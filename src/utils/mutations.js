import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CARD = gql`
mutation addCard($logoUrl: String, $companyName: String, $tagline: String, $name: String!, $jobTitle: String!, $website: String, $phone: String!, $email: String!) {
  addCard(logoUrl: $logoUrl, companyName: $companyName, tagline: $tagline, name: $name, jobTitle: $jobTitle, website: $website, phone: $phone, email: $email ) {
      _id
      logoUrl
      companyName
      tagline
      name
      jobTitle
      website
      phone
      email
      username
    }
  }
`;

export const ADD_COLLECTED_CARD = gql`
mutation addCollectedCard($_id: ID!) {
  addCollectedCard(_id: $_id) {
    _id
    logoUrl
    companyName
    tagline
    name
    jobTitle
    website
    phone
    email
    username
  }
}
`;

export const UPDATE_CARD = gql`
  mutation updateCard($_id: ID!, $input: CardInput) {
    updateCard(_id: $_id, input: $input) {
      _id
      logoUrl
      companyName
      tagline
      name
      jobTitle
      website
      phone
      email
    }
  }
`;

export const DELETE_CARD = gql`
  mutation deleteCard($_id: ID!) {
    deleteCard(_id: $_id) {
      _id
    }
  }
`;

export const REMOVE_CARD = gql`
  mutation removeCard($_id: ID!) {
    removeCard(_id: $_id) {
      _id
    }
  }
`;
