// src/components/nav/navbar_container.js

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import { getSavedRecipes } from '../../actions/recipe_actions';

import NavBar from "./navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  savedRecipes: Object.values(state.saved_recipes)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  getSavedRecipes: currentUser => dispatch(getSavedRecipes(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
