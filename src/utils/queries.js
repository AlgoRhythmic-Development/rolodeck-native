import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      cards {
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
      collectedCards {
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
  }
`;

export const QUERY_MY_COLLECTION = gql`
  {
    me {
      _id
      collectedCards {
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
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      cards {
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
      collectedCards {
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
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
      cards {
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
  }
`;

export const QUERY_CARDS = gql`
  query cards($username: String) {
    cards(username: $username) {
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

export const QUERY_CARD = gql`
  query card($id: ID!) {
    card(_id: $id) {
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

export const QUERY_USER_CARDS = gql`
  query userCards($name: String!) {
    userCards(name: $name) {
      _id
      username
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
