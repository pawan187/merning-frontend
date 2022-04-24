import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ApolloProvider from "./ApolloProvider";
// import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApolloProvider />
  </StrictMode>
);
