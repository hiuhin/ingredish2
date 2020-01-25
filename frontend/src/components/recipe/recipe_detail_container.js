import { connect } from "react-redux";
import { fetchAllRecipes, fetchRecipe } from "./../../actions/recipe_actions";
import RecipeDetail from "./recipe_detail";

const mapStateToProps = (state,ownProps) => {
    return {
        currentUser: state.session.user,
        recipeId: ownProps.match.params.recipeId,
        recipes: state.recipes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipe: (id) => dispatch(fetchRecipe(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
