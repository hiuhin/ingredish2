import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import MainPage from "./main/main_page";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
    <div className="footer">
      <h1>ingredish</h1>
      <footer>Copyright &copy; 2020 ingredish</footer>
    </div>
  </div>
);

export default App;
