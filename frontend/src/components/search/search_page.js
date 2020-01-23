import React from 'react';
// import Recipe from "./../../../../models/Recipe";
// import axios from 'axios';
// import RecipeDetail from './../recipe/recipe_detail';
import { Link, Route } from 'react-router-dom';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: [],
        searchVal: "",
    };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addSearch = this.addSearch.bind(this);
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
       
        this.setState({searchTerm: [...this.state.searchTerm, this.state.searchVal] });
        this.setState({ searchVal: "" });
        }
    

    handleSubmit() {
        // debugger;
        this.props.fetchRecipes(this.state.searchTerm).then(() => this.setState({
            searchTerm:[]
        }));
        
  }

  render() {
    // console.log('recipes', typeof this.props.recipes);
    //   <Route to ="/recipe" component={RecipeDetail}></Route>
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update("searchVal")}
            onDoubleClick={this.addSearch}
            value={this.state.searchVal}
          />
          <button type="submit">Search</button>
        </form>

        <ul>
          {this.props.recipes.map((recipe, idx) => (
            <div>
                  <nav>
                      <Link to={`/${recipe._id}`} >
                      {recipe.name}
                  </Link>
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
    );
  }
}

export default SearchPage;