import React from 'react';
// import Recipe from "./../../../../models/Recipe";
import axios from 'axios';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: "",
        // loading: false,
        // recipes: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // this.props.fetchRecipes();
  }

  update(field) {
      return e => {
        //   this.search(e.target.value);
      this.setState({ [field]: e.target.value });
    };
  }

    handleSubmit() {
        // debugger;
    this.props.fetchRecipes(this.state.searchTerm);
  }

//   search = async val => {
//     this.setState({ loading: true });
//     const res = await axios(
      
//     );
//     const movies = await res.data.results;

//     this.setState({ movies, loading: false });
//   };

  render() {
    // console.log('recipes', typeof this.props.recipes);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update("searchTerm")}
            value={this.state.searchTerm}
          />
          <button type="submit">Search</button>
        </form>

        <ul>
          {this.props.recipes.map((recipe, idx) => (
            <div>
              <h1>{recipe.name}</h1>
              <li key={idx}>
                {recipe.keywords.map((ing, id) => (
                    <li key={id}>{ing}</li>
                ))}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchPage;