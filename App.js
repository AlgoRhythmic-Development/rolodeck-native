// react-native-gesture-handler MUST BE AT TOP OF IMPORTS
import "react-native-gesture-handler";
import React from "react";
import { StoreProvider } from "./src/utils/Store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./src/utils/auth";
import Navigation from "./src/components/Navigation";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://rolodeck-native-server.herokuapp.com/graphql",
});

const authLink = setContext(async (_, { headers, ...context }) => {
  const token = await Auth.getToken();
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    ...context,
  };
});

const link = ApolloLink.from([authLink, httpLink]);

// Initialize Apollo Client
const client = new ApolloClient({
  link: link,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Navigation />
      </StoreProvider>
    </ApolloProvider>
  );
};

export default App;
