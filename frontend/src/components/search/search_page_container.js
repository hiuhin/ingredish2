import { connect } from "react-redux";
import { fetchAllRecipes } from "./../../actions/recipe_actions";
import SearchPage from "./search_page";
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    // debugger;
    // console.log('here',state);
  return {
    // errors: state.errors.session
    currentUser: state.session.user,
    recipes: Array.from(state.recipes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: (search) => dispatch(fetchAllRecipes(search)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
