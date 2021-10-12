import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import UpgradesPage from "./components/Upgrades/UpgradesPage";
import AboutPage from "./components/About/AboutPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <TopBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/upgrades" component={UpgradesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
