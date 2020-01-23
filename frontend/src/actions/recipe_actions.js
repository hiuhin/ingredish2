// src/actions/session_actions.js

import * as APIUtil from "../util/recipes_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";


export const receiveRecipes = recipes => {
  console.log("action",recipes);
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes
  }
};


export const fetchAllRecipes = (search) => dispatch => {
  // debugger;
 return( APIUtil.fetchRecipes(search).then(res =>
    dispatch(receiveRecipes(res))))
}
    
    

