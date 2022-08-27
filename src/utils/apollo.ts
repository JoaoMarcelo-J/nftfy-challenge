import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://us-east1-nftfy-backend.cloudfunctions.net/v2/graphql",
  cache: new InMemoryCache(),
});
