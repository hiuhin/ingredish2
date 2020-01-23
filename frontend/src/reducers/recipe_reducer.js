import { RECEIVE_ALL_RECIPES } from "../actions/recipe_actions";

// const initialState = {
//   isAuthenticated: false,
//   recipe: {}
// };

export default function (state = {}, action) {
    Object.freeze(state);
    // let nextState;
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
        //   debugger;
      return action.recipes.data;
        // ...state,
        // isAuthenticated: !!action.currentUser,
         
    default:
      return state;
  }
}
