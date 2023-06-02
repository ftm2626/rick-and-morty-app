import { ApolloProvider } from "@apollo/client";
import MainComp from "components/MainComp";
import { Client } from "logic/graphql/config";
import { store } from "logic/store/config";
import { Provider } from "react-redux";

function App() {
  return (
    <ApolloProvider client={Client}>
      <Provider store={store}>
        <MainComp />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
