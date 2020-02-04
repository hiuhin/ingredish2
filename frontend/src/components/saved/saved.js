import React from 'react';
import { Link } from 'react-router-dom'

class Saved extends React.Component {

    componentDidMount() {
        this.props.getSavedRecipes(this.props.currentUser)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.savedRecipes !== this.props.savedRecipes) {
    //         console.log("changed")
    //     }
    // }

    render() {
        if (this.props.savedRecipes.length === 0) {
            return "no saved recipes";       
        } 
        else {
            // debugger
            return (
              <div className="recipes">
                <ul>
                  {
                    this.props.savedRecipes.map((recipe, idx) => (
                        <div
                          className="searched_recipe_items"
                          key={`recipe-${idx}`}
                        >
                          <Link to={`/recipe/${recipe._id}`}>
                            <img
                              src={recipe.image_url}
                              className="recipeimg"
                              alt="recipe"
                            />
                          </Link>
                          <div className="recipeinfo">
                            <h1>{recipe.name}</h1>
                            {recipe.keywords.map((ing, id) => (
                              <li key={id}>{ing}</li>
                            ))}
                          </div>
                        </div>
                      ))
                    }
                </ul>
              </div>
            );
        }
    }
}

export default Saved;