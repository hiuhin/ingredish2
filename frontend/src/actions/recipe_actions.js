// src/actions/session_actions.js

import * as APIUtil from "../util/recipes_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";


export const receiveRecipes = recipes => {
  // console.log("action",recipes);
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes
  }
};

export const receiveRecipe = recipe => {
  debugger;
  return {
    type: RECEIVE_RECIPE,
    recipe
  }
}


export const fetchAllRecipes = (search) => dispatch => {
  // debugger;
 return( APIUtil.fetchRecipes(search).then(res =>
    dispatch(receiveRecipes(res))))
}
  
export const fetchRecipe = (id) => dispatch => {
  // debugger;
  return (APIUtil.fetchRecipe(id).then(res => console.log('actionsrecipe',res)));
    // dispatch(receiveRecipes(res))))
}
    

