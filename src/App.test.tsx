import { render } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";

const mocks = [];

test("Render App", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
});
