import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import withApollo from "../lib/withApollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}
export default withApollo(MyApp);
