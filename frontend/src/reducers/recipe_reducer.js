import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE } from "../actions/recipe_actions";

// const initialState = {
//   isAuthenticated: false,
//   recipe: {}
// };

export default function (state = {}, action) {
  Object.freeze(state);
   let newState = {};
    // let nextState;
  switch (action.type) {
 
    case RECEIVE_ALL_RECIPES:
    //  debugger;
      action.recipes.data.forEach(recipe => (newState[recipe._id] = recipe));
      return newState;
    case RECEIVE_RECIPE:
      // debugger;
      // let newState = {};
      newState[action.recipe.data._id] = action.recipe.data;
      return newState;

    default:
      return state;
  }
}
