import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import MainPage from "./main/main_page";
import SearchPageContainer from "./search/search_page_container";
// import RecipeDetail from "./recipe/recipe_detail";
import RecipeDetailContainer from './recipe/recipe_detail_container';
import Modal from "./modal/modal";
import RecipeItem from "./recipe/recipe_item";
import "../index.css";

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/test" component={RecipeItem} />
      <ProtectedRoute exact path="/search" component={SearchPageContainer} />
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/:recipeId" component={RecipeDetailContainer} />
    </Switch>
  </div>
);

export default App;
