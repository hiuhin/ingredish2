export default function(state = {}, action) {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {

    case "RECEIVE_SAVED_RECIPES":
    debugger
      action.recipes.data.forEach(recipeId => {
        newState[recipeId] = recipeId;
      });
      return newState;

    default:
      return state;
  }
}

