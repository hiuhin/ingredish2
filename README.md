# ingredish

ingredish is a web application that provides various food recipes based on the searched ingredients and allows users to save recipes on to their favorites list. Additionally, users are able to leave public comments on each recipe that are available to other users.

[ingredish Live](https://ingredish.herokuapp.com/)

![Main](./readme/ingredishMain.gif)

# Technologies
* Backend: `MongoDB`, `Express.js`, `JavaScript`
* Frontend: `React/Redux`, `Node.js`, `JavaScript`

# Features and MVPs
## User authorization
* Securely salt and hash users' passwords
* Allow users to sign up, login, and logout

## Search
* Using predefined keywords, users can search recipes using ingredients
* List recipes that match search keywords

![Search](./readme/ingredishSearch.gif)

## Recipes
* Show recipe details once user clicks on a search result

![Detail](./readme/ingredishDetail.gif)

## Favorites
* Users can save recipes to their favorites list

![Favorites](./readme/ingredishFavorites.gif)

## Comments
* Once users land on a recipe show page, user is able to add a comment on to the comments field which lets them share their opinions about the recipe with other users.

![Comments](./readme/ingredishComments.gif)

```javascript
async getComments() {
    try {
        let recipe = await this.props.addComment(
        this.props.recipeId,
        this.state.comment
        );
        this.setState({ recipe: recipe });
    } catch (err) {
        console.log(err.message);
    }
}
```

```javascript
handleSubmit() {
    this.getComments();
    this.setState({
        comment: "",
        commentsToggle: false
    });
}

<form onSubmit={this.handleSubmit}>
    <label className="comment-text" htmlFor="">
        Your comment:
        <input
        className="comment-input"
        type="textarea"
        value={this.state.comment}
        placeholder="Leave a comment"
        onChange={this.update("comment")}
        required
        />
    </label>
    <button className="comment-button" type="submit">
        +
    </button>
</form>
```

## Responsive UI Design
* Splash page with responsive UI design allowing dynamic changes for better user experience on different types of devices

![ResponsiveUI](./readme/ingredishResponsive.gif)

## Future Plans
* Allow users to add their own recipes
* Implement Responsive UI throughout the website


---
## Group Members
Benjamin Huh 
Nandhu Kuppusamy 
Noel Seo
Anne Wong