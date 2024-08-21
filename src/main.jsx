import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import configureStore from "./redux/configureStore.js";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </StrictMode>
);
