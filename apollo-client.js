import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/samnang/web3-rsvp-dapp-30daysofweb3",
  cache: new InMemoryCache()
});

export default client;
