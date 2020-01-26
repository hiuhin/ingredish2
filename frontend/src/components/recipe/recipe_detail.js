import React from "react";
import { Link, withRouter } from 'react-router-dom';
import showBg from "../../images/cuttingboard.jpeg";

// import Recipe from './../../../../models/Recipe';


class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      recipe: this.props.fetchRecipe(this.props.recipeId),
      commentsToggle: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.props.fetchRecipe(this.props.match.params.recipeId);
    
  }

  update(field) {
    return (e =>
      this.setState({
        [field]:e.target.value
      }))
  }
  async getComments() {
    try {
    //  console.log("recipecommbef", this.state.recipe.data);
      let recipe = await this.props.addComment(
        this.props.recipeId,
        this.state.comment
      );
      this.setState({ recipe: recipe });
      // debugger;
      // console.log("recipecomm", (this.state.recipe.data));
    }
    catch(err){
      console.log(err.message);
    }
  }

  handleSubmit() {
    this.getComments();
      this.setState({
        comment: "",
      commentsToggle: false
      })
    
  }
  render() {
    const { recipes, recipeId } = this.props;
    return (
      <div>
        <nav className="backtosearch">
          <Link to={{ pathname: "/search" }}> Back to Search</Link>
        </nav>
        {recipes[recipeId] ? (
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
                <div className="recipe-nutrition">
                  {recipes[recipeId].nutrition_facts}
                </div>
                <div className="ingredients">Ingredients</div>
                <div className="recipe-ingredients">
                  {recipes[recipeId].ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </div>
                <div className="directions">Directions</div>
                <div className="recipe-directions">
                  {Object.keys(recipes[recipeId].directions).map((key, i) => (
                    <li
                      key={key}
                    >{`${key}: ${recipes[recipeId].directions[key]}`}</li>
                  ))}
                </div>
                <h1>Comments:</h1>
                {this.state.commentsToggle ? (
                  <ul>
                    {recipes[recipeId].comments.length != 0
                      ? recipes[recipeId].comments.map((comment, id) => (
                          <li>{comment}</li>
                        ))
                      : null}
                  </ul>
                ) : (
                  <ul>
                    {this.state.recipe.data
                      ? this.state.recipe.data.comments.map((comment, id) => (
                          <li>{comment}</li>
                        ))
                      : null}
                  </ul>
                )}
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="">
                    Comments:
                    <input
                      type="textarea"
                      value={this.state.comment}
                      onChange={this.update("comment")}
                    />
                  </label>
                  <button type="submit">Add Comment</button>
                </form>
              </div>
              <div></div>
            </div>
            <div className="recipe-inner"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}


export default withRouter(RecipeDetail);
