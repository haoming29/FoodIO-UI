import { createContext, useState } from "react";
import { Switch, useLocation, Route, Redirect } from "react-router-dom";
import mainRoutes from "./config/routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

export const AuthContext = createContext({
  authed: false,
  setAuthed: () => {},
});

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Nav />
      <Switch>
        {mainRoutes.map((route, i) => {
          return (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              component={route.component}
            />
          );
        })}
        <Redirect from="*" to="/404" />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
