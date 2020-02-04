import React from 'react';

class Saved extends React.Component {

    componentDidMount() {
        this.props.getSavedRecipes(this.props.currentUser)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.savedRecipes !== this.props.savedRecipes) {
            console.log("changed")
        }
    }

    render() {
        if (this.props.savedRecipes.length === 0) {
            return null;
        
        } 
        else {
            debugger
            return (
                <div>
                    {
                        this.props.savedRecipes.map(recipe => (
                            <div>{recipe}</div>
                        ))
                    }
                </div>
            )
        }
    }
}

export default Saved;