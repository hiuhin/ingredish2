import React from 'react';
<<<<<<< HEAD
import './recipe_item.scss';
=======
>>>>>>> master

class RecipeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Beef Bulgogi",
          ingredients: [
            "1 pound flank steak, thinly sliced",
            "5 tablespoons soy sauce",
            "2 1/2 tablespoons white sugar",
            "1/4 cup chopped green onion",
            "2 tablespoons minced garlic",
            "2 tablespoons sesame seeds",
            "2 tablespoons sesame oil",
            "1/2 teaspoon ground black pepper"
          ],
          keywords: ["beef"],
          directions: {
            1: "Place the beef in a shallow dish. Combine soy sauce, sugar, green onion, garlic, sesame seeds, sesame oil, and ground black pepper in a small bowl. Pour over beef. Cover and refrigerate for at least 1 hour or overnight.",
            2: "Preheat an outdoor grill for high heat, and lightly oil the grate.",
            3: "Quickly grill beef on hot grill until slightly charred and cooked through, 1 to 2 minutes per side."
          },
          image_url:
            "https://images.media-allrecipes.com/userphotos/720x405/1254483.jpg",
          nutrition_facts:
            "232 calories; 13.2 g fat; 12.4 g carbohydrates; 16.2 g protein; 27 mg cholesterol; 1157 mg sodium."
        };
    }
    render() {
        return (
          <div className="recipe-item">
            <div className="recipe-left">left</div>
            <div className="recipe-center">
              <div></div>
              <div>
                <div className="recipe-name">{this.state.name}</div>
                <img src={this.state.image_url} width="100%" />
                <div>{this.state.ingredients}</div>
                <div className="recipe-directions">
                  {Object.keys(this.state.directions).map((key, i) => (
                    <li key={key}>{`${key}: ${this.state.directions[key]}`}</li>
                  ))}
                </div>
                {this.state.nutrition_facts}
              </div>
              <div></div>
            </div>
            <div className="recipe-inner">right</div>
          </div>
        );
    }
}

export default RecipeItem;