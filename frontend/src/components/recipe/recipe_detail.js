import React from "react";
import { Link } from 'react-router-dom';
import showBg from "../../images/cuttingboard.jpeg";
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
      // <div id="search-detail">
      //   <nav>
      //     <Link to="/search"> Back to Search</Link>
      //   </nav>
      //   {this.props.recipe ?
      //     (<div>
      //       < p > {this.props.recipe.name}</p>
      //       <img src={this.props.recipe.image_url} alt="" />
      //       <ul>
      //         {Array.from(this.props.recipe.ingredients).map((ing, id) =>
      //           <li key={id}>{ing}</li>
      //         )}
      //       </ul>
      //       <ul>
      //         {Array.from(this.props.recipe.directions).map((dir, id) =>
      //           <li key={id}>{dir}</li>
      //         )}
      //       </ul>
      //     </div>) : ""}

      // </div>
      <div>
        <nav>
          <Link to="/search"> Back to Search</Link>
        </nav>
        {
            <div className="recipe-item">
              <img src={showBg} className="show-bg" />
              <div className="recipe-left"></div>
              <div className="recipe-center">
                <div></div>
                <div>
                  <img
                    className="recipe-img"
                    src={this.props.recipe.image_url}
                    width="100%"
                  />
                  <div className="recipe-name">{this.props.recipe.name}</div>
                  <div className="recipe-nutrition">{this.props.recipe.nutrition_facts}</div>
                  <div className="ingredients">Ingredients</div>
                  <div className="recipe-ingredients">
                    {this.props.recipe.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </div>
                  <div className="directions">Directions</div>
                  <div className="recipe-directions">
                    {Object.keys(this.props.recipe.directions).map((key, i) => (
                      <li key={key}>{`${key}: ${this.props.recipe.directions[key]}`}</li>
                    ))}
                  </div>
                </div>
                <div></div>
              </div>
              <div className="recipe-inner"></div>
            </div>

          
        }
      </div>
    );
  }
}

export default RecipeDetail;
