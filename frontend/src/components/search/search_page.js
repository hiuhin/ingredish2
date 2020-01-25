import React from "react";
// import Recipe from "./../../../../models/Recipe";
// import axios from 'axios';
// import RecipeDetail from './../recipe/recipe_detail';
import { Link, Route } from "react-router-dom";
import "./search_page.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fetchKeyword } from "./../../actions/keyword_actions";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: [],
      searchVal: "",
      keywordValid: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSearch = this.addSearch.bind(this);
    this.deleteIng = this.deleteIng.bind(this);
     
  }

  componentDidMount() {
    this.props.fetchRecipes(this.state.searchTerm);
  }

  update(field) {
    return e => {
      //   this.state.searchTerm = [...this.state.searchTerm, e.target.value];
      this.setState({ [field]: e.target.value });
    };
  }

  addSearch() {
    // debugger;
    
    console.log("valid", fetchKeyword(this.state.searchVal));
    this.setState({
      searchTerm: [...this.state.searchTerm, this.state.searchVal]
    });
 
    this.setState({ searchVal: "" });
  }

  deleteIng(value) {
    // debugger;
    var array = Array.from(this.state.searchTerm);
    var index = array.indexOf(value);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ searchTerm: array });
    }
  }

  handleSubmit() {
    // debugger;
    
    this.props.fetchRecipes(this.state.searchTerm).then(() =>
      this.setState({
        searchTerm: []
      })
    );
  }

  render() {
    this.props.closeModal();
    // console.log("path", this.props.match.path);
    // console.log("staterecipes", this.state.recipes);
    return (
      <div>
        <div className="searchbackground">
          <form className="searchform" onSubmit={this.handleSubmit}>
            <div className="searchbar">
              <FontAwesomeIcon icon={faSearch} />
              <input
                id="search"
                type="text"
                onChange={this.update("searchVal")}
                placeholder="Add Ingredients"
                // onDoubleClick={this.addSearch}

                value={this.state.searchVal}
              />
              <div onClick={this.addSearch} className="searchadd">
                +
              </div>
            </div>
            <button type="submit">Show Me Recipes!</button>
          </form>
        </div>

        <div className="searchTerms">
          <ul>
            {this.state.searchTerm
              ? this.state.searchTerm.map((ing, id) => (
                  <li>
                    {ing}
                    <span onClick={() => this.deleteIng(ing)}>
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </span>
                  </li>
                ))
              : null}
          </ul>
        </div>

        <ul className="recipes">
          {this.props.match.path != "/" ? 
            
            (this.props.recipes.map((recipe, idx) => (
            <li>
              <nav>
                <Link to={`/${recipe._id}`}>{recipe.name}</Link>
              </nav>

              <img src={recipe.image_url} className="recipeimg" alt="" />
              {/* <li key={idx}>
                {recipe.keywords.map((ing, id) => (
                  <li key={id}>{ing}</li>
                ))}
              </li> */}
              {/* <button>Save</button> */}
            </li>
          ))):null}
        </ul>
      </div>
    );
  }
}

export default SearchPage;
