import React from "react";
import { Link } from 'react-router-dom';
// import Recipe from './../../../../models/Recipe';


class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.fetchRecipe(this.props.recipeId);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.addSearch = this.addSearch.bind(this);
  }

  componentDidMount() {
   this.props.fetchRecipe(this.props.recipeId);
   }

  render() {
    // let recipe = Recipe.find(this.props.recipeId);
    console.log('recipedetail', this.props.recipe);
    console.log('recipeid', this.props.recipeId);
    return (
      <div id="search-detail">
        <nav>
          <Link to="/search"> Back to Search</Link>
        </nav>
        {this.props.recipe.length != 0  ?
          (<div>
            < p > {this.props.recipe.name}</p>
            <img src={this.props.recipe.image_url} alt="" />
            <ul>
              {/* {Array.from(this.props.recipe.ingredients).map((ing, id) =>
                <li key={id}>{ing}</li>
              )}
            </ul>
            <ul>
              {Array.from(this.props.recipe.directions).map((dir, id) =>
                <li key={id}>{dir}</li>
              )} */}
            </ul>
          </div>) : ""}
        
      </div>
    );
  }
}

export default RecipeDetail;
