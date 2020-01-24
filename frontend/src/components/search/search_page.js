import React from 'react';
// import Recipe from "./../../../../models/Recipe";
// import axios from 'axios';
// import RecipeDetail from './../recipe/recipe_detail';
import { Link, Route } from 'react-router-dom';
import './search_page.scss';
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: [],
        searchVal: "",
    };
      this.handleSubmit = this.handleSubmit.bind(this);
    this.addSearch = this.addSearch.bind(this);
    this.deleteIng = this.deleteIng.bind(this);
      //  this.props.fetchRecipes(this.state.searchTerm);
  }

    update(field) {
      
      return e => {
        //   this.state.searchTerm = [...this.state.searchTerm, e.target.value];
      this.setState({ [field]: e.target.value });
    };
    }
    
    addSearch() {
        // debugger;
       
        this.setState({searchTerm: [...this.state.searchTerm, this.state.searchVal] });
        this.setState({ searchVal: "" });
        }
    
  deleteIng(value) {
    // debugger;
    var array = Array.from(this.state.searchTerm);
    var index = array.indexOf(value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ searchTerm: array });
    }
      
    }

  handleSubmit() {
    // debugger;
    this.props.fetchRecipes(this.state.searchTerm)
        .then(() => this.setState({
            searchTerm:[]
        }));
        
  }

  render() {
    // console.log("recipes", this.props.recipes);
    // console.log("searchTerm", this.state.searchval);
    return (
      <div className="search">
        <div className="searchbackground">
          <div className="searchcontent">
            <form className="searchform" onSubmit={this.handleSubmit}>
              <input
                id="search"
                type="text"
                onChange={this.update("searchVal")}
                placeholder="Add Ingredients"
                // onDoubleClick={this.addSearch}

                value={this.state.searchVal}
              />
              <div onClick={this.addSearch}>+</div>
              <button type="submit">
                Search
              </button>
            </form>
            <div className="searchTerms">
               <ul>
          {this.state.searchTerm
            ? this.state.searchTerm.map((ing, id) => (
              <ul>
                <li>{ing}
                  <button onClick={()=>this.deleteIng(ing)}>Delete</button>
                </li>
               </ul>
            )
              )
            : null}
        </ul>
            </div>

            <ul id='search-results'>
              {this.props.recipes.map((recipe, idx) => (
                <div>
                  <nav>
                    <Link to={`/${recipe._id}`}>{recipe.name}</Link>
                  </nav>

                  <img src={recipe.image_url} alt="" />
                  <li key={idx}>
                    {recipe.keywords.map((ing, id) => (
                      <li key={id}>{ing}</li>
                    ))}
                  </li>
                  <button>Save</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;