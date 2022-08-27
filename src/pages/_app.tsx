import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { client } from "../utils/apollo";
import { DAppProvider } from "@usedapp/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <DAppProvider config={{}}>
        <Component {...pageProps} />
      </DAppProvider>
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default MyApp;
