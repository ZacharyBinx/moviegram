import React from "react";
import { Container } from "@material-ui/core";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { StoreProvider } from "./reducers/search";

const App = () => {

  return (
    <StoreProvider>
      <BrowserRouter>
        <Container maxidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
