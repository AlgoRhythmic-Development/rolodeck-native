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
  query user($_id: ID!) {
    user(_id: $_id) {
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

export const QUERY_USER_CARDS = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
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
  {
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
      username
    }
  }
`;

export const QUERY_CARD = gql`
  query card($_id: ID!) {
    card(_id: $_id) {
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