import { connect } from "react-redux";
import {
    getSavedRecipes
} from "../../actions/recipe_actions.js"
import Saved from "./saved";

const mSTP = state => {
    debugger
    return {
        currentUser: state.session.user,
        savedRecipes: Object.keys(state.saved_recipes)
    };
};

const mDTP = dispatch => {
    return {
        getSavedRecipes: currentUser => dispatch(getSavedRecipes(currentUser))
    };
};

export default connect(mSTP, mDTP)(Saved);
