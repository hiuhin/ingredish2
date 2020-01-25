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
    const { recipes, recipeId } = this.props;
    // let recipe = Recipe.find(this.props.recipeId);
    console.log('recipedetail', recipes[recipeId]);
    return (
      <div>
        <nav>
          <Link to="/search"> Back to Search</Link>
        </nav>
        {recipes[recipeId] ?
          (
            <div className="recipe-item">
              <img src={showBg} className="show-bg" />
              <div className="recipe-left"></div>
              <div className="recipe-center">
                <div></div>
                <div>
                  <img
                    className="recipe-img"
                    src={recipes[recipeId].image_url}
                    width="100%"
                  />
                  <div className="recipe-name">{recipes[recipeId].name}</div>
                  <div className="recipe-nutrition">{recipes[recipeId].nutrition_facts}</div>
                  <div className="ingredients">Ingredients</div>
                  <div className="recipe-ingredients">
                    {recipes[recipeId].ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </div>
                  <div className="directions">Directions</div>
                  <div className="recipe-directions">
                    {Object.keys(recipes[recipeId].directions).map((key, i) => (
                      <li key={key}>{`${key}: ${recipes[recipeId].directions[key]}`}</li>
                    ))}
                  </div>
                </div>
                <div></div>
              </div>
              <div className="recipe-inner"></div>
            </div>

          
          ) : ""}
          </div>
    );
  }
}


export default RecipeDetail;
