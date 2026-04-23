import RouteRenderer from "./components/RouteRenderer";

import {
  BrowserRouter as Router,
} from "react-router";

export const RouterView = () => {
  return (
    <Router>
      <RouteRenderer />
    </Router>
  );
};
