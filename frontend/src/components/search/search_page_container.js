import { connect } from "react-redux";
import { fetchAllRecipes } from "./../../actions/recipe_actions";
import SearchPage from "./search_page";

const mapStateToProps = state => {
    // debugger;
    // console.log('here',state);
  return {
    // errors: state.errors.session
    recipes: Array.from(state.recipes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: (search) => dispatch(fetchAllRecipes(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
