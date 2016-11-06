var React = require('react');

var Template = require('./layout/template.jsx').Template;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;

var RecipeList = React.createClass({
  getInitialState: function(){
    var self = this;
    var recipeCollection = new RecipeCollection();
    recipeCollection.fetch().then(function(){
      self.setState({recipeCollection: self.state.recipeCollection});
    });

    return{
      recipeCollection: recipeCollection
    };
  },
  render: function(){
    var recipes = this.state.recipeCollection.map(function(recipe){
      return (
        <h1>This is a recipe</h1>
      );
    });

    return(
      <Template>
        {recipes}
      </Template>
    );
  }
});

module.exports = {
  RecipeList: RecipeList
};
