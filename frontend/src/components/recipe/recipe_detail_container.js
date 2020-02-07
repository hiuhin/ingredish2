import { connect } from "react-redux";
import {
  fetchRecipe,
  updateRecipe,
  getRecipe
} from "./../../actions/recipe_actions";
import RecipeDetail from "./recipe_detail";

const mapStateToProps = (state,ownProps) => {
    return {
        currentUser: state.session.user,
        recipeId: ownProps.match.params.recipeId,
        recipe: Object.values(state.recipes)[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchRecipe: id => dispatch(fetchRecipe(id)),
      addComment: (id, comment) => dispatch(updateRecipe(id,comment)),
      getRecipe: id => dispatch(getRecipe(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
