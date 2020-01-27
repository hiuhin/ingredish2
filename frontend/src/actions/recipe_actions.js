// src/actions/session_actions.js

import * as APIUtil from "../util/recipes_api_util";
// import jwt_decode from "jwt-decode";

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";


export const receiveRecipes = recipes => {
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes
  }
};

export const receiveRecipe = recipe => {
  return {
    type: RECEIVE_RECIPE,
    recipe
  }
}




export const fetchAllRecipes = (search) => dispatch => {
 return( APIUtil.fetchRecipes(search).then(res =>
    dispatch(receiveRecipes(res))))
}
  
export const fetchRecipe = (id) => dispatch => {
  return (APIUtil.fetchRecipe(id).then(res => dispatch(receiveRecipes(res))));
}

export const updateRecipe = (id, comment) => dispatch => {
  return APIUtil.updateRecipe(id, comment)
    // .then(res =>dispatch(receiveRecipe(res))
  // );
}
    

