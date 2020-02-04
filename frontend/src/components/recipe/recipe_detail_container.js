import { connect } from "react-redux";
import {
  // fetchAllRecipes,
  fetchRecipe,
  updateRecipe
} from "./../../actions/recipe_actions";
import RecipeDetail from "./recipe_detail";

const mapStateToProps = (state,ownProps) => {
  debugger
    return {
        currentUser: state.session.user,
        recipeId: ownProps.match.params.recipeId,
        recipes: state.recipes
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchRecipe: id => dispatch(fetchRecipe(id)),
      addComment: (id, comment) => dispatch(updateRecipe(id,comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
