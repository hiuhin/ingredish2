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
      keywordValid: true,
      alreadyEnteredIng: false,
      SearchRes : false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSearch = this.addSearch.bind(this);
    this.deleteIng = this.deleteIng.bind(this);

    this.props.fetchRecipes(this.state.searchTerm);
  }

 
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  async getKeywordValid() {
    try {
      let search = this.state.searchVal;
      let res = await fetchKeyword(this.state.searchVal);

      if (res.data && !this.state.searchTerm.some(ing => ing === search)) {
        this.setState({
          searchTerm: [...this.state.searchTerm, search],
          keywordValid: true,
          alreadyEnteredIng: false
        });
      }
        else if (this.state.searchTerm.some(ing => ing === search)) {
          this.setState({
            alreadyEnteredIng: true,
            keywordValid: true
          });  
        }
       else {
        this.setState({
          keywordValid: false,
        });
      }
    }
      catch(err){
      console.log(err.message);
      }
    
  }
  addSearch() {
    this.getKeywordValid();
    this.setState({
      searchVal: "",
      SearchRes: true
    });
  }

  deleteIng(value) {
    var array = Array.from(this.state.searchTerm);
    var index = array.indexOf(value);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ searchTerm: array });
    }
  }
  async returnRecipe() {
    try {
      let recipes = await this.props.fetchRecipes(this.state.searchTerm);
      // console.log("searchRes", recipes.recipes.data.length);
      
      if (recipes.recipes.data.length != 0) {
        (this.setState({
          SearchRes: true
        }))
      }
      
    } catch (err) {
      console.log(err.message);
    }
  }

  handleSubmit() {
    // this.returnRecipe();
    this.props.fetchRecipes(this.state.searchTerm).then(() =>
    this.setState({
      searchTerm: []
    })
    );
  }

  render() {
    this.props.closeModal();

    return (
      <div>
        <div className="searchbackground">
          {!this.state.keywordValid ? (
            <h1>
              {" "}
              Sorry!, No recipe yet for this ingredient, please enter some other
              ingredient
            </h1>
          ) : null}
          {this.state.alreadyEnteredIng && this.state.keywordValid ? (
            <h1> Already entered, please enter different ingredient</h1>
          ) : null}

          <form className="searchform" onSubmit={this.handleSubmit}>
            <div className="searchbar">
              <FontAwesomeIcon icon={faSearch} />
              <input
                id="search"
                type="text"
                onChange={this.update("searchVal")}
                placeholder="Add Ingredients"
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
          
             {this.props.recipes.map((recipe, idx) => (
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
              ))
            }
        </ul>
      </div>
    );
  }
}

export default SearchPage;
