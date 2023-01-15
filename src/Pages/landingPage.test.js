import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, persistor } from "../app/store";
import LandingPage from "./LandingPage";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";

test("renders graph", () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <LandingPage />
        </Router>
      </PersistGate>
    </Provider>
  );
  const percentileElement = screen.getByText(/percentile/i);
  expect(percentileElement).toBeInTheDocument();
});
