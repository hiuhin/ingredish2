import { connect } from "react-redux";
import { fetchAllRecipes } from "./../../actions/recipe_actions";
import SearchPage from "./search_page";
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    recipes: Object.values(state.recipes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: (search) => dispatch(fetchAllRecipes(search)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
